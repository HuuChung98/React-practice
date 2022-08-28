import React, { Component } from 'react'

class Cart extends Component {
  render() {
    const { carts, onChangeQuantity, onDeleteItem } = this.props;
    return(
        <div>
        {/* Button trigger modal */}
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#cart">
            Cart
        </button>
        {/* Modal */}
        <div className="modal fade" id="cart" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add to Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       <table className='table'>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img src={item.image} 
                                        alt={item.name} 
                                        width="100%"
                                        height="400px"
                                        />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>
                                        <button className='btn btn-light' onClick={() => onChangeQuantity(item, "decrease")}>-</button>
                                        <span>{item.quantity}</span>
                                        <button className='btn btn-light' onClick={() => onChangeQuantity(item, "increase")}>+</button>
                                        
                                        </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => onDeleteItem(item.id)}>X</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                       </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}

export default Cart