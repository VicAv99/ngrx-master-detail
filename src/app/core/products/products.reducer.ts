import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from 'src/app/products/product.model';
import { ProductsActions, ProductsActionTypes } from './products.actions';

export interface ProductsState extends EntityState<Product> {
  selectedProductId: string | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>();
export const initialState: ProductsState = adapter.getInitialState({
  selectedProductId: null
});

export function productsReducer(state = initialState, action: ProductsActions): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.ProductSelected: {
      return Object.assign({}, state, { selectedProductId: action.payload });
    }
    case ProductsActionTypes.ProductsLoaded: {
      return adapter.addAll(action.payload, state);
    }
    case ProductsActionTypes.ProductAdded: {
      return adapter.addOne(action.payload, state);
    }
    case ProductsActionTypes.ProductUpdated: {
      return adapter.upsertOne(action.payload, state);
    }
    case ProductsActionTypes.ProductDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSelectedProductId = (state: ProductsState) => state.selectedProductId;

const { selectIds, selectEntities, selectAll, selectTotal } = adapter.getSelectors();

export const selectProductIds = selectIds;

export const selectProductEntities = selectEntities;

export const selectAllProducts = selectAll;

export const selectProductTotal = selectTotal;
