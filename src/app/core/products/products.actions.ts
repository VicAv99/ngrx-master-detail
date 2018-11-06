import { Action } from '@ngrx/store';
import { Product } from 'src/app/products/product.model';

export enum ProductsActionTypes {
  ProductsAction  = '[Products] Action',
  ProductSelected = '[Products] Selected',
  LoadProducts    = '[Products] Load Products',
  ProductsLoaded  = '[Products] Products Loaded',
  AddProduct      = '[Products] Add Product',
  ProductAdded    = '[Products] Product Added',
  UpdateProduct   = '[Products] Update Product',
  ProductUpdated  = '[Products] Product Updated',
  DeleteProduct   = '[Products] Delete Product',
  ProductDeleted  = '[Products] Product Deleted',
}

export class Products implements Action {
  readonly type = ProductsActionTypes.ProductsAction;
}

export class ProductSelected implements Action {
  readonly type = ProductsActionTypes.ProductSelected;
  constructor(public payload) {}
}

export class LoadProducts implements Action {
  readonly type = ProductsActionTypes.LoadProducts;
  constructor() {}
}

export class ProductsLoaded implements Action {
  readonly type = ProductsActionTypes.ProductsLoaded;
  constructor(public payload: Product[]) {}
}

export class AddProduct implements Action {
  readonly type = ProductsActionTypes.AddProduct;
  constructor(public payload: Product) {}
}

export class ProductAdded implements Action {
  readonly type = ProductsActionTypes.ProductAdded;
  constructor(public payload: Product) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductsActionTypes.UpdateProduct;
  constructor(public payload: Product) {}
}

export class ProductUpdated implements Action {
  readonly type = ProductsActionTypes.ProductUpdated;
  constructor(public payload: Product) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductsActionTypes.DeleteProduct;
  constructor(public payload: Product) {}
}

export class ProductDeleted implements Action {
  readonly type = ProductsActionTypes.ProductDeleted;
  constructor(public payload: Product) {}
}

export type ProductsActions = Products
  | ProductSelected
  | LoadProducts
  | ProductsLoaded
  | AddProduct
  | ProductAdded
  | UpdateProduct
  | ProductUpdated
  | DeleteProduct
  | ProductDeleted;
