import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Productdetail } from './productdetail/productdetail';

@NgModule({
  declarations: [App, Productdetail],
  imports: [BrowserModule],
  bootstrap: [App],
})
export class AppModule {}
