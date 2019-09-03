import {Injectable} from '@angular/core';
import {Cart} from './mycart/cart';
import {Product} from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // productList: Product[];
  cart: Cart;

  constructor() {
    const storedProducts = localStorage.getItem('cart');
    if (storedProducts) {
      this.cart = JSON.parse(storedProducts);
    } else {
      this.cart = new Cart();
      this.cart.productList = new Array<Product>();
    }
  }

  addToCart(product) {
    if (!this.checkIfProductExist(product)) {
      product.quantity = 1;
      product.subtotal = product.price * product.quantity;
      this.cart.productList.push(product);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    return this.cart;
  }

  calcTotalAmount() {
    let total = 0;
    this.cart.productList.forEach(p => total += p.subtotal);
    this.cart.totalAmount = total;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    return this.cart;
  }

  modifyQuantity(product, quantity) {
    if (this.checkIfProductExist(product) && quantity > 0) {
      product.quantity = quantity;
      product.subtotal = product.price * product.quantity;
      const index = this.cart.productList.findIndex(p => p.id === product.id);
      this.cart.productList[index] = product;
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    return this.cart;
  }

  getCart() {
    return this.cart;
  }

  checkIfProductExist(product) {
    if (this.cart.productList.findIndex(p => product.id === p.id) > -1) {
      return true;
    } else {
      return false;
    }
  }

  removeProduct(product) {
    const id = this.cart.productList.findIndex(p => product.id === p.id);
    if (id > -1) {
      this.cart.productList.splice(id, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    return this.cart;
  }

  recalculateAmounts() {
    this.calcTotalAmount();
    this.cart.paybleAmount = ((100 + this.cart.gst) * this.cart.totalAmount) / 100 + this.cart.deliveryAmount;
    localStorage.setItem('cart', JSON.stringify(this.cart));
    return this.cart;
  }
}
