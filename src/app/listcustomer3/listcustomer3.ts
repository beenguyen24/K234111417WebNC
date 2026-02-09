import { Component } from '@angular/core';

type CustomerStatus = {
  id: string;
  name: string;
  phone: string;
  active: boolean;
};

@Component({
  selector: 'app-listcustomer3',
  standalone: false,
  templateUrl: './listcustomer3.html',
  styleUrls: ['./listcustomer3.css'],
})
export class Listcustomer3 {
  customers: CustomerStatus[] = [
    { id: 'S01', name: 'Bui Van G', phone: '0901 111 222', active: true },
    { id: 'S02', name: 'Ly Thi H', phone: '0902 333 444', active: false },
    { id: 'S03', name: 'Vu Van I', phone: '0903 555 666', active: true },
  ];
}
