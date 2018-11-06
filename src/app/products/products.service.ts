import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://levelup-json-app.herokuapp.com/products';

  constructor(
    private http: HttpClient
  ) { }

  all() {
    return this.http.get(this.url);
  }

  create(product) {
    return this.http.post(this.url, product);
  }

  update(product) {
    return this.http.patch(`${this.url}/${product.id}`, product);
  }

  delete(productId) {
    return this.http.delete(`${this.url}/${productId}`);
  }
}
