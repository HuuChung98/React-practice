import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddtoCart = () => {
        dispatch({ type: "ADD_TO_CART", data: product })
    }
    return (
        <div key={product.id} className="col-sm-4">
            <div className="card">
                <img src={product.image}
                    alt={product.name}
                    height="300px"
                    className="card-img" />
                <div className="card-body">
                    <h3 className='card-title'>{product.name}</h3>
                    <p className='card-text'>{product.price}</p>
                    <button className='btn btn-success' onClick={handleAddtoCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem