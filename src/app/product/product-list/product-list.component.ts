import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from '../product-service.service';
import {Product} from '../product';
import {NotifierService} from 'angular-notifier';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {
  products: Product[] ;
  private readonly notifier: NotifierService;

  constructor(private productService: ProductServiceService, notifierService: NotifierService) {
    this.products = productService.getProducts();
    this.notifier = notifierService;
  }

  ngOnInit() {
  }

  share(e, product) {
    e.preventDefault();
    this.notifier.notify( 'success', `${product.name} successfully shared.` );
    console.log(product.name + ' is shared successfully!');
  }

}
