import {Injectable} from '@angular/core';
import {products} from './product-list/products';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: Product[];

  constructor() {
    this.products = (products) as Product[];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id): Product {
    return this.products.find(p => p.id === id);
  }
}
