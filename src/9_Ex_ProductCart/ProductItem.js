import React, { Component } from 'react'

class ProductItem extends Component {
  render() {
    const {product, onSelect, onAddtoCart} = this.props;
    return (
      <div className='card'>
        <img className='card-img'
         src={product.image}
         alt={ product.name}
         height="300px" />
         <div className="card-body">
            <p className='card-title'>{product.name}</p>
            <p className='card-text'>{product.price}</p>
            <button className='btn btn-success' onClick={() => onSelect(product)}>Detail</button>
            <button className='btn btn-primary' onClick={() => onAddtoCart(product)}>Add to Cart</button>
         </div>
      </div>
    )
  }
}

export default ProductItem