import { Component } from '@angular/core';

@Component({
  selector: 'app-learndirective',
  standalone: false,
  templateUrl: './learndirective.html',
  styleUrl: './learndirective.css',
})
export class Learndirective {
  flag_value:number=1
  changeView()
  {
    if(this.flag_value==1)
      this.flag_value=2
    else
      this.flag_value=1
  }
  products=["Thuốc lào","Thuốc lá","Thuốc trừ sâu","Thuốc diệt cỏ","Thuốc trừ nấm"]
  customers=[
    {id:1, name:"Nguyễn Văn A", phone:113},
    {id:2, name:"Trần Thị B", phone:114},
    {id:3, name:"Lê Văn C", phone:115},
    {id:4, name:"Phạm Thị D", phone:116},
    {id:5, name:"Hoàng Văn E", phone:117}
  ]

}
