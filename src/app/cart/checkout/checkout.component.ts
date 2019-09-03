import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart-service';
import {Cart} from '../mycart/cart';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  readonly cart: Cart;
  discount: number;
  redeem: string;

  constructor(private cartService: CartService) {
    this.cart = cartService.getCart();
    this.discount = 0;
  }

  onRedeam() {
    if (this.redeem === '100') {
      this.discount = 100;
    } else {
      this.discount = 0;
    }
  }

  ngOnInit() {
  }


}
