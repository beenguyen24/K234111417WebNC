import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Customer } from '../customer';

type Product = {
  ProductId: string;
  ProductName: string;
  Price: number;
  Image: string;
};

type Category = {
  Cateid: string;
  CateName: string;
  Products: Product[];
};

@Component({
  selector: 'app-customerdetail',
  standalone: false,
  templateUrl: './customerdetail.html',
  styleUrls: ['./customerdetail.css'],
})
export class Customerdetail {
  categories: Category[] = [];

  constructor(
    private cs: Customer,
    private catalogService: CatalogService
  ) {
    this.categories = this.catalogService.getCategories();
  }
  search_customer_by_id(id:string, 
    tdid:HTMLElement,
    tdname:HTMLElement,
    tdage:HTMLElement,)
    {
      let c=this.cs.get_customer_detail(id)
      if (c!=null) {
        tdid.innerHTML=c.id
        tdname.innerHTML=c.name
        tdage.innerHTML="<font color='red'>"+c.age+"</font>"
      }
      else{
        tdid.innerHTML=""
        tdname.innerHTML=""
        tdage.innerHTML=""
        alert("Không tìm thấy khách hàng có ID="+id)
      }
    }

}
