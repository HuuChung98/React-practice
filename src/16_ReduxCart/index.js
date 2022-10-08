import React from 'react';
import ProductList from './ProductList';
import Carts from './Carts';

const ReduxCart = () => {
  return (
    <div className='container'>
        <h1>Product Carts</h1>
        <Carts />
        <ProductList />
    </div>
  )
}

export default ReduxCart