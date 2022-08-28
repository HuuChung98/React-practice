import React from 'react';
import { useSelector } from 'react-redux'

const Carts = () => {
  const { carts } = useSelector((state) => state.cart);
   return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            carts.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} 
                         alt={item.name}
                         height="50px"
                         width="50px" />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button className='btn btn-success'>+</button>
                  <span className='mx-2'>{item.quantity}</span>
                  <button className='btn btn-danger'>-</button>
                  </td>
                <td>{item.quantity * item.price}</td>
                <td>
                  <button className='btn btn-danger'>X</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Carts