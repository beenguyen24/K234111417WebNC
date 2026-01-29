import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-service-product-image-event-detail',
  standalone: false,
  templateUrl: './service-product-image-event-detail.component.html',
  styleUrls: ['./service-product-image-event-detail.component.css'],
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    activateRoute.paramMap.subscribe((param) => {
      const id = param.get('id');
      if (id != null) {
        this.selectedProduct = productService.getProductDetail(id);
      }
    });
  }

  goBack() {
    this.router.navigate(['service-product-image-event']);
  }
}
