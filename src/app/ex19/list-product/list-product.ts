import { Component } from '@angular/core';

@Component({
  selector: 'app-list-product',
  standalone: false,
  templateUrl: './list-product.html',
  styleUrls: ['./list-product.css'],
})
export class ListProductComponent {
  products = [
    { id: 'p01', name: 'Laptop Pro 14', price: 32000000 },
    { id: 'p02', name: 'Phone Max', price: 21000000 },
    { id: 'p03', name: 'Tablet Air', price: 15000000 }
  ];
}
