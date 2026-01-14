import { Component } from '@angular/core';

@Component({
  selector: 'app-learnbinding',
  standalone: false,
  templateUrl: './learnbinding.html',
  styleUrl: './learnbinding.css',
})
export class Learnbinding {
  student_id:string="K234111417"
  student_name:string="Nguyen Ngoc Ai Thien"
  student_address:string="Bcons Plaza, Binh Duong"
  red_text_style={
    'color':'red',
  }

}
