import React, { Component } from 'react'

class Map extends Component {
    constructor() {
        super();

        this.state = {
            products: [
                {id: 1, name: 'Iphone 13 Pro Max'},
                {id: 2, name: 'Samsung Galaxy Note 10'},
                {id: 3, name: 'Xiaomi '}
            ],

            students: [
                {id: '0001', name: "huu chung", email: "huuchung@gmail.com"},
                {id: '0002', name: "phuong nam", email: "phuongnam@gmail.com"},

                {id: '0003', name: "nhat nam", email: "nhatnam@gmail.com"},

            ]
        }
    }

    
  render() {
    return (
      <div className='container'>
        <div className="row">
        {this.state.products.map((product) => {
            {/* Mỗi phần tử jsx trả về bắt buộc phải có prop key  */}
            {/* giá trị key của mỗi phần tử bắt buộc phải khác nhau  */}
            return(
                <div key={product.id} className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h4 className='card-title'> {product.name} </h4>
                        <button className='btn btn-success'>Button</button>
                    </div>
                </div>
            </div>
            );
        })}
        </div>

        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.state.students.map((student, index) => {
                    return(
                        <tr key={student.id}>
                            <td>{ index + 1}</td>
                            <td>{ student.name }</td>
                            <td>{ student.email}</td>
                            
                            <td>
                                <button className='btn btn-success'>Update</button>
                                <button className='btn btn-danger'>Delete</button>

                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
      </div>
    )
  }
}

export default Map