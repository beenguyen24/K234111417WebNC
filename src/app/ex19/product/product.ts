import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrls: ['./product.css'],
})
export class ProductComponent {
  title = 'Product Component';
  description = 'This page is loaded via the /product route.';
}
