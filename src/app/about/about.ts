import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  student_id:string="SV123"
  student_name:string="Bee Nguyen"
  student_email:string="bee24thang4@gmail.com"
  my_uni_logo = 'assets/images/logo.jpg';
}
