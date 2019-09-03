import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HighlightDirective} from './highlight.directive';
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';
import {NotifierModule} from 'angular-notifier';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },

        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        },
      },
      theme: 'material'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
