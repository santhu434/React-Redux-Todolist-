// components/ProductForm.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../store/actions';

function ProductForm({ addProduct }) {
  const [newProduct, setNewProduct] = useState({ title: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.title) {
      addProduct(newProduct);
      setNewProduct({ title: '',  });
    }
  };

  return (
    <div>
      <h2>Grocery Shopping</h2>
      <div className='form'>
      <input id='input'
        type="text"
        name="title"
        placeholder="Add something in you list"
        value={newProduct.title}
        onChange={handleInputChange}
      />
      <button className='button' onClick={handleAddProduct}>Add</button>
      </div>
    </div>
  );
}

export default connect(null, { addProduct })(ProductForm);
