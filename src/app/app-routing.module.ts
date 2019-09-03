import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {MyCartComponent} from './cart/mycart/mycart.component';
import {CheckoutComponent} from './cart/checkout/checkout.component';


const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'product-detail/:productId', component: ProductDetailComponent},
  {path: 'myCart', component: MyCartComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
