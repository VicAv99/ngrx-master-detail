import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from '../core/products/products.facade';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.productsFacade.allProducts$;
  currentProduct$: Observable<Product> = this.productsFacade.currentProduct$;

  constructor(private productsFacade: ProductsFacade) { }

  ngOnInit() {
    this.productsFacade.loadProducts();
  }

}
