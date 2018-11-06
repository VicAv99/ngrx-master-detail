import { Injectable } from '@angular/core';
import { Store, ActionsSubject, select } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { selectAllProducts, selectCurrentProject } from '..';
import { filter } from 'rxjs/operators';
import { ProductsActionTypes } from './products.actions';
import * as productActions from './products.actions';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  allProducts$ = this.store.pipe(select(selectAllProducts));
  currentProduct$ = this.store.pipe(select(selectCurrentProject));

  mutations$ = this.actions$.pipe(
    filter(action =>
      action.type === ProductsActionTypes.AddProduct
      || action.type === ProductsActionTypes.UpdateProduct
      || action.type === ProductsActionTypes.DeleteProduct
    )
  );

  constructor(
    private store: Store<ProductsState>,
    private actions$: ActionsSubject
  ) { }

  selectProduct(productId) {
    this.store.dispatch(new productActions.ProductSelected(productId));
  }

  loadProducts() {
    this.store.dispatch(new productActions.LoadProducts());
  }

  addProduct(product) {
    this.store.dispatch(new productActions.AddProduct(product));
  }

  updateProduct(product) {
    this.store.dispatch(new productActions.UpdateProduct(product));
  }

  deleteProduct(product) {
    this.store.dispatch(new productActions.DeleteProduct(product));
  }

}
