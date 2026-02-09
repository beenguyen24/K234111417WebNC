import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  standalone: false,
  templateUrl: './listproduct.html',
  styleUrls: ['./listproduct.css'],
})
export class Listproduct {
  products=[{"id":"p1","name":"Iphone 14 Pro","price":30000000,"image":"https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2022_10_28_638025690989577402_iPhone%2014%20Pro%20(11).jpg"},
            {"id":"p2","name":"Samsung S23 Ultra","price":25000000,"image":"https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/2/s23-ultra-tim_6_2.png"},
            {"id":"p3","name":"Xiaomi Mi 13","price":-15000000,"image":"https://synnexfpt.com/wp-content/uploads/2023/05/xiaomi-13-lite-2.jpg"},
            {"id":"p4","name":"Nokia X30","price":8000000,"image":"https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/149260/Originals/Nokia-X30-5G-2.jpeg"},
            {"id":"p5","name":"Oppo reno 12","price":-8000000,"image":"https://viostore.vn/wp-content/uploads/2024/09/4-11.png"}]
  selected_id:any
  constructor(private router:Router,private activeRouter:ActivatedRoute) 
  {
    // dùng router để điều hướng
    // dùng activeRouter để nhận điều hướng
    activeRouter.paramMap.subscribe((param)=>{
      this.selected_id=param.get("id")
    })
  }
  view_detail(pid:string)
{
  alert("Bạn muốn xem chi tiết sản phẩm có mã ID: "+pid);
  this.router.navigate(["san-pham-1",pid])
}
}
