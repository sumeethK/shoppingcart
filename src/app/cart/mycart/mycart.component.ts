import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart-service';
import {NotifierService} from 'angular-notifier';
import {Cart} from './cart';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MyCartComponent implements OnInit {
  cart: Cart;


  constructor(private cartService: CartService, private notifier: NotifierService) {

    this.cart = cartService.getCart();

    this.cart.deliveryAmount = this.cart.productList.length > 0 ? 10 : 0;
    this.cart = this.cartService.recalculateAmounts();
  }

  // addToCart(product) {
  //   this.productList = this.cartService.addToCart(product);
  // }

  modifyQuantity(product, $event) {
    try {
      const quantity = parseInt($event.target.value);
      this.cart = this.cartService.modifyQuantity(product, quantity);
    } catch (e) {
      console.log(e);
    }
    this.cart = this.cartService.recalculateAmounts();

  }

  removeProduct(product) {
    this.notifier.notify('info', `${product.name} successfully removed from your cart.`);
    this.cart = this.cartService.removeProduct(product);
    this.cart = this.cartService.recalculateAmounts();
  }


  ngOnInit() {
  }

}
