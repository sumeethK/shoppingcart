import {Component, OnInit} from '@angular/core';
import {Product} from '../../product/product';
import {CartService} from '../cart-service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MyCartComponent implements OnInit {

  productList: Product[];
  totalAmount: number;
  paybleAmount: number;
  deliveryAmount: number;


  constructor(private cartService: CartService, private notifier: NotifierService) {
    this.productList = cartService.getCart();
    this.deliveryAmount = this.productList.length > 0 ? 10 : 0;
    this.recalculateAmounts();
  }

  // addToCart(product) {
  //   this.productList = this.cartService.addToCart(product);
  // }

  modifyQuantity(product, $event) {
    try {
      const quantity = parseInt($event.target.value);
      this.productList = this.cartService.modifyQuantity(product, quantity);
    } catch (e) {
      console.log(e);
    }
    this.recalculateAmounts();

  }

  removeProduct(product) {
    this.notifier.notify('info', `${product.name} successfully removed from your cart.`);
    this.productList = this.cartService.removeProduct(product);
    this.recalculateAmounts();
  }

  recalculateAmounts() {
    this.totalAmount = this.cartService.totalAmount();
    this.paybleAmount = this.totalAmount + this.deliveryAmount;
  }

  ngOnInit() {
  }

}
