import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, RoutingComponent } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Ptb1 } from './ptb1/ptb1';
import { Ptb2 } from './ptb2/ptb2';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomer } from './listcustomer/listcustomer';
import { Listcustomer2 } from './listcustomer2/listcustomer2';
import { Listcustomer3 } from './listcustomer3/listcustomer3';
import { Notfound } from './notfound/notfound';
import { Listproduct } from './listproduct/listproduct';
import { Productdetail } from './productdetail/productdetail';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { Ex18 } from './ex18/ex18';
import { Ex26 } from './ex26/ex26';
import { Ex27 } from './ex27/ex27';
import { Classes } from './classes/classes';
import { Ex28 } from './ex28/ex28';
import { Ex50 } from './ex50/ex50';

@NgModule({
  declarations: [
    App,
    About,
    Contact,
    Ptb1,
    Ptb2,
    Customerdetail,
    Listcustomer,
    Listcustomer2,
    Listcustomer3,
    Notfound,
    Listproduct,
    Productdetail,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    Ex18,
    RoutingComponent,
    Ex26,
    Ex27,
    Classes,
    Ex28,
    Ex50
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {}
