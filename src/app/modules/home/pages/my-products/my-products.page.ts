import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.page.html',
  styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {
  public products: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.products = response;
        console.table(this.products);
      },
      error: (err) => {},
    });
  }
}
