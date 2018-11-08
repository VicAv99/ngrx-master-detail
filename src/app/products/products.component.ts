import { Component, OnInit } from '@angular/core';
import { ProductsFacade } from '../core/products/products.facade';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.productsFacade.allProducts$;
  currentProduct$: Observable<Product> = this.productsFacade.currentProduct$;
  form: FormGroup;

  constructor(private productsFacade: ProductsFacade, private fb: FormBuilder) { }

  ngOnInit() {
    this.productsFacade.loadProducts();
    this.productsFacade.mutations$.subscribe(_ => this.resetCurrentProduct());
    this.resetCurrentProduct();
    this.initForm();
  }

  resetCurrentProduct() {
    this.selectProduct({ id: null });
  }

  selectProduct(product) {
    this.productsFacade.selectProduct(product.id);
  }

  saveProduct(product) {
    product.id ? this.productsFacade.updateProduct(product) :
      this.productsFacade.addProduct(product);
  }

  deleteProduct(product) {
    this.productsFacade.deleteProduct(product);
  }

  initForm() {
    this.form = this.fb.group({
      id: [null],
      productName: [''],
      productCode: [''],
      price: [null],
      category: [''],
      rating: [null]
    });
  }

}
