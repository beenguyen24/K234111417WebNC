import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsImage = [
    { ProductId: 'p1', ProductName: 'Coca', Price: 100, Image: '/assets/images/h1.jpeg' },
    { ProductId: 'p2', ProductName: 'Pepsi', Price: 300, Image: '/assets/images/h2.jpg' },
    { ProductId: 'p3', ProductName: 'Sting', Price: 200, Image: '/assets/images/h3.jpg' },
  ];

  constructor() {}

  getProductsWithImages() {
    return this.productsImage;
  }

  getProductDetail(id: string) {
    return this.productsImage.find((x) => x.ProductId === id);
  }
}
