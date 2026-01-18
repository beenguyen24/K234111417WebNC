import { Component } from '@angular/core';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-productdetail',
  standalone: false,
  templateUrl: './productdetail.html',
  styleUrl: './productdetail.css',
})
export class Productdetail {
  categories: Array<{
    Cateid: string;
    CateName: string;
    Products: Array<{
      ProductId: string;
      ProductName: string;
      Price: number;
      Image: string;
    }>;
  }> = [];

  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }
}
