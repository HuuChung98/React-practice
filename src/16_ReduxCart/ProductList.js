import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';

const ProductList = () => {
    const { products } = useSelector((state) => state.cart);

    return (
        <div className='row'>
            {products.map((product) => (
                <ProductItem product={product} />
            ))}
        </div>
    )
}

export default ProductList