// store/reducers.js
import {
    FETCH_PRODUCTS_SUCCESS,
    ADD_PRODUCT_SUCCESS,
    DELETE_PRODUCT_SUCCESS,
    EDIT_PRODUCT_SUCCESS
  } from './actions';
  
  const initialState = {
    products: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
        };
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
            ...state,
            products: state.products.filter((product)=> product.id !== action.payload)
        }
      case  EDIT_PRODUCT_SUCCESS:
        
          const updatedProducts = state.products.map((product) =>
          product.id === action.payload.id ? { ...product, title: action.payload.title } : product
          );
        return {
          ...state,
          products: updatedProducts,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;
  