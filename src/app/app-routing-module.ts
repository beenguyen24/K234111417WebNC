import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './about/about';
import { Listcustomer } from './listcustomer/listcustomer';
import { Listcustomer2 } from './listcustomer2/listcustomer2';
import { Listcustomer3 } from './listcustomer3/listcustomer3';
import { Notfound } from './notfound/notfound';
import { Listproduct } from './listproduct/listproduct';
import { Productdetail } from './productdetail/productdetail';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { ProductComponent } from './ex19/product/product';
import { ListProductComponent } from './ex19/list-product/list-product';
import { ServiceProductComponent } from './ex19/service-product/service-product';

const routes: Routes = [
  { path: 'gioi-thieu', component: About },
  { path: 'khach-hang-1', component: Listcustomer },
  { path: 'khach-hang-2', component: Listcustomer2 },
  { path: 'khach-hang-3', component: Listcustomer3 },
  { path:'san-pham-1',component:Listproduct},
  { path:'san-pham-1/:id',component:Productdetail},
  { path: 'product', component: ProductComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: 'service-product', component: ServiceProductComponent },
  { path: 'service-product-image-event', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  { path: '**', component: Notfound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [
  ProductComponent,
  ListProductComponent,
  ServiceProductComponent,
];
