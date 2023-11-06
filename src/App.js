// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductForm/>
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
