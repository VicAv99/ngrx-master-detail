import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ProductsService } from 'src/app/products/products.service';
import { ProductsActionTypes } from './products.actions';
import { switchMap, map } from 'rxjs/operators';
import * as fromActions from './products.actions';
import { Product } from 'src/app/products/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsEffects {
  @Effect() effect$ = this.actions$.ofType(ProductsActionTypes.ProductsAction);

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductsActionTypes.LoadProducts),
      switchMap((action: fromActions.LoadProducts) => this.productsService.all().pipe(
      map((products: Product[]) => (new fromActions.ProductsLoaded(products)))
    ))
  );

  @Effect()
  addProduct$ = this.actions$.pipe(
    ofType(ProductsActionTypes.AddProduct),
      switchMap((action: fromActions.AddProduct) => this.productsService.create(action.payload).pipe(
      map((product: Product) => (new fromActions.ProductAdded(product)))
    ))
  );

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType(ProductsActionTypes.UpdateProduct),
      switchMap((action: fromActions.UpdateProduct) => this.productsService.update(action.payload).pipe(
      map((product: Product) => (new fromActions.ProductUpdated(product)))
    ))
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(ProductsActionTypes.DeleteProduct),
      switchMap((action: fromActions.DeleteProduct) => this.productsService.delete(action.payload.id).pipe(
      map((product: Product) => (new fromActions.ProductDeleted(product)))
    ))
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
