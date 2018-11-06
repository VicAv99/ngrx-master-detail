import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromProducts from './products/products.reducer';

import { Product } from '../products/product.model';

export interface AppState {
  products: fromProducts.ProductsState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: fromProducts.productsReducer
};

// -------------------------------------------------------------------
// PRODUCTS SELECTORS
// -------------------------------------------------------------------
export const selectProductsState = createFeatureSelector<fromProducts.ProductsState>('products');

export const selectProductIds = createSelector(
  selectProductsState,
  fromProducts.selectProductIds
);

export const selectProductEntities = createSelector(
  selectProductsState,
  fromProducts.selectProductEntities
);

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAllProducts
);

export const selectCurrentProductId = createSelector(
  selectProductsState,
  fromProducts.getSelectedProductId
);

const emptyProduct: Product = {
  id: null,
  productName: '',
  productCode: '',
  price: null,
  category: '',
  rating: null
};

export const selectCurrentProject = createSelector(
  selectProductEntities,
  selectCurrentProductId,
  (projectEntities, projectId) => {
    return projectId ? projectEntities[projectId] : emptyProduct;
  }
);
