// store/sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS
} from './actions';

const API_URL = 'https://fakestoreapi.com/products';

function* fetchProductsSaga () {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* addProductSaga(action) {
  try {
    const response = yield call(axios.post,'https://fakestoreapi.com/products',action.payload);      
    yield put({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
    console.log(action.payload)
 
  } catch (error) {
    console.error(error);
  }
}

function* deleteProductSaga(action) {
  try {
    const productId = action.payload;
    
    yield call(axios.delete, `https://fakestoreapi.com/products/${productId}`); 
    
    yield put({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}



function* editProductSaga(action) {
  try {
    yield call(axios.patch, `${API_URL}/${action.payload.id}`, {
      title: action.payload.title,
    });
    yield put({ type: EDIT_PRODUCT_SUCCESS, payload: action.payload });
    console.log(action.payload); 
  } catch (error) {
    console.error(error);
    console.log(action.payload); 
  }
}


function* rootSaga() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsSaga);
  yield takeEvery(ADD_PRODUCT, addProductSaga);
  yield takeEvery(DELETE_PRODUCT, deleteProductSaga);
  yield takeEvery(EDIT_PRODUCT, editProductSaga);
  
}

export default rootSaga;
