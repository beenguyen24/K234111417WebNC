import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { MyComponent } from './my-component/my-component';
import { Learnbinding } from './learnbinding/learnbinding';
import { Ptb1 } from './ptb1/ptb1';
import { FormsModule } from '@angular/forms';
import { Ptb2 } from './ptb2/ptb2';
import { Learndirective } from './learndirective/learndirective';
import { LunarCalendar } from './lunar-calendar/lunar-calendar';

@NgModule({
  declarations: [
    App,
    About,
    Contact,
    MyComponent,
    Learnbinding,
    Ptb1,
    Ptb2,
    Learndirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LunarCalendar
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
