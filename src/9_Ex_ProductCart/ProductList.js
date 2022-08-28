import React, { Component } from 'react'
import ProductItem from './ProductItem'

class ProductList extends Component {
  render() {
    const { products, onSelect, onAddtoCart } = this.props;
    return (
      <div>
        
         {/* DANH SÁCH SAN PHẨM  */}
         <div className="row">
            {products.map((product) => {
                return (
                    <div key={product.id} className="col-sm-4">
                        {/* gọi ra ProductItems  */}
                        <ProductItem
                        product={product}
                        onSelect = {onSelect}
                        onAddtoCart = { onAddtoCart } />
                    </div>
                );
            })}
        </div>
      </div>
    )
  }
}

export default ProductList