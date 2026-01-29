import { Component } from '@angular/core';

@Component({
  selector: 'app-service-product',
  standalone: false,
  templateUrl: './service-product.html',
  styleUrls: ['./service-product.css'],
})
export class ServiceProductComponent {
  services = [
    { name: 'Warranty Extension', desc: 'Extend warranty to 24 months.' },
    { name: 'Installation', desc: 'On-site setup and configuration.' },
    { name: 'Trade-In', desc: 'Upgrade with trade-in offers.' }
  ];
}
