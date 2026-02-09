import { Component } from '@angular/core';

type CustomerOrder = {
  id: string;
  name: string;
  totalOrders: number;
  totalSpent: number;
};

@Component({
  selector: 'app-listcustomer2',
  standalone: false,
  templateUrl: './listcustomer2.html',
  styleUrls: ['./listcustomer2.css'],
})
export class Listcustomer2 {
  vipCustomers: CustomerOrder[] = [
    { id: 'V01', name: 'Pham Thi D', totalOrders: 12, totalSpent: 5400 },
    { id: 'V02', name: 'Hoang Van E', totalOrders: 9, totalSpent: 4100 },
    { id: 'V03', name: 'Do Thi F', totalOrders: 15, totalSpent: 7200 },
  ];
}
