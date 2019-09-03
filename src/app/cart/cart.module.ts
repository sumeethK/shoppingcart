import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyCartComponent} from './mycart/mycart.component';
import {AppRoutingModule} from '../app-routing.module';
import {CheckoutComponent} from './checkout/checkout.component';


@NgModule({
  declarations: [MyCartComponent, CheckoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class CartModule { }
