
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const DELETE_PRODUCT='DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS='DELETE_PRODUCT_SUCCESS'
export const EDIT_PRODUCT=' EDIT_PRODUCT';
export const EDIT_PRODUCT_SUCCESS='DELETE_PRODUCT_SUCCESS'

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product//santhosh
});

export const deleteProduct = (Id) => ({
    type: DELETE_PRODUCT,
    payload: Id,
  });

export const editProduct = (Id,title) => ({
    type: EDIT_PRODUCT,
    payload:Id,title,
  });