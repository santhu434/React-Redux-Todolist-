import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, deleteProduct, editProduct } from '../store/actions';
import { useDispatch } from "react-redux";
import { FaEdit, FaTrash } from 'react-icons/fa';
import store from '../store';

function ProductList({ products, fetchProducts }) {
  const dispatch =useDispatch()
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // const dispatch = useDispatch();

  function handleDelete(Id){
    dispatch(deleteProduct(Id))
  }

  const [editMode, setEditMode] = useState(false);
  const [editedText, setEditedText] = useState('');
  const [editedProductId, setEditedProductId] = useState(null);

  const handleEdit = (product) => {
      setEditedText(product.title);
      setEditedProductId(product.id);
      setEditMode(!editMode)
  };

  const handleSave = () => {
    if (editMode) {
      // Dispatch the edited text and product id to Redux
      store.dispatch(editProduct({ id: editedProductId, title: editedText }));
      setEditedText(''); // Clear the input field
      setEditedProductId(null); // Clear the edited product id
      setEditMode(false); // Exit edit mode
    }
  };

  return (
    <div className='container'>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {editMode && editedProductId === product.id ? (
              <div className='flex1'>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={handleSave}>Save</button>
              </div>
            ) : (
              <div className='flex1'>{product.title}</div>
            )}
            <div className='flex2'>
              <FaEdit onClick={() => handleEdit(product)} className='btn-del' />
              <FaTrash onClick={() => handleDelete(product.id)} className='btn-edt' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { fetchProducts })(ProductList);
