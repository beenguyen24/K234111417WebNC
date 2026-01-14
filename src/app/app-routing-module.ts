import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LunarCalendar } from './lunar-calendar/lunar-calendar';

const routes: Routes = [
  { path: 'lunar-calendar', component: LunarCalendar }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
