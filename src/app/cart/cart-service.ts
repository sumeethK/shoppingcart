import {Injectable} from '@angular/core';
import {Product} from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList: Product[];

  constructor() {
    const storedProducts = localStorage.getItem('getProducts');
    if (storedProducts) {
      this.productList = JSON.parse(storedProducts);
    } else {
      this.productList = new Array<Product>();
    }
  }

  addToCart(product) {
    if (!this.checkIfProductExist(product)) {
      product.quantity = 1;
      product.subtotal = product.price * product.quantity;
      this.productList.push(product);
      localStorage.setItem('getProducts', JSON.stringify(this.productList));
    }
    return this.productList;
  }
  totalAmount() {
      let total = 0;
      this.productList.forEach(p => total += p.subtotal);
      return total;
  }

  modifyQuantity(product, quantity) {
    if (this.checkIfProductExist(product) && quantity > 0) {
      product.quantity = quantity;
      product.subtotal = product.price * product.quantity;
      const index = this.productList.findIndex(p => p.id === product.id);
      this.productList[index] = product;
      localStorage.setItem('getProducts', JSON.stringify(this.productList));
    }
    return this.productList;
  }

  getCart() {
    return this.productList;
  }

  checkIfProductExist(product) {
    if (this.productList.findIndex(p => product.id === p.id) > -1) {
      return true;
    } else {
      return false;
    }
  }

  removeProduct(product) {
    const id = this.productList.findIndex(p => product.id === p.id);
    if (id > -1) {
      this.productList.splice(id, 1);
      localStorage.setItem('getProducts', JSON.stringify(this.productList));
    }
    return this.productList;
  }
}
