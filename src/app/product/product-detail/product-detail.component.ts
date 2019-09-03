import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../product';
import {CartService} from '../../cart/cart-service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: Product;
  private readonly notifier: NotifierService;

  constructor(private productService: ProductServiceService, private route: ActivatedRoute,
              private cartService: CartService, notifierService: NotifierService) {

    this.productId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = productService.getProductById(this.productId);
    this.notifier = notifierService;
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    this.notifier.notify( 'success', `${product.name} successfully added to cart.` );
    console.log('product added to cart!!!', product.name);
  }

  ngOnInit() {
  }

}
