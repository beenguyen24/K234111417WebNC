import { Component } from '@angular/core';

type Customer = {
  id: string;
  name: string;
  age: number;
  city: string;
};

@Component({
  selector: 'app-listcustomer',
  standalone: false,
  templateUrl: './listcustomer.html',
  styleUrls: ['./listcustomer.css'],
})
export class Listcustomer {
  customers: Customer[] = [
    { id: 'C01', name: 'Nguyen Van A', age: 22, city: 'Ha Noi' },
    { id: 'C02', name: 'Tran Thi B', age: 24, city: 'Da Nang' },
    { id: 'C03', name: 'Le Van C', age: 21, city: 'Ho Chi Minh' },
  ];
}
