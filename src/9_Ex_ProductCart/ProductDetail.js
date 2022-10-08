import React, { Component } from 'react'

class ProductDetail extends Component {

    render() {
        const { product } = this.props;
        if(!product) {
            return null;
        }
        return (<div className="row">
            <div className="col-sm-4">
                <h3>{product.name}</h3>
                <img src={product.image}
                    alt={product.name}
                    width="100%"
                    height="400px" />
            </div>
            <h3>Thông số kỹ thuật</h3>
            <div className="col-sm-8">
             <table>
                <tbody>
                    <tr>
                        <td> Màn hình</td>
                        <td> {product.display}</td>
                    </tr>
                    <tr>
                        <td>Hệ điều hành</td>
                        <td>{product.os}</td>
                    </tr>
                    <tr>
                        <td>Camera</td>
                        <td>{product.camera}</td>
                    </tr>
                    <tr>
                        <th>Bộ nhớ</th>
                        <th>{product.memory}</th>
                        {/* <th>{product.rom}</th> */}
                    </tr>
                </tbody>
             </table>
            </div>
        </div>)


    }
}

export default ProductDetail