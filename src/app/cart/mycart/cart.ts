import {Product} from '../../product/product';

export class Cart {
  productList: Product[];
  totalAmount: number;
  paybleAmount: number;
  deliveryAmount: number;
  gst = 18;

}
