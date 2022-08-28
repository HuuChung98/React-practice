import React, { Component } from 'react'

class UserList extends Component {
    
    render() {
        const { users, onDelete, onSelect } = this.props;
        return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Data of Birth</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.dateOfBirth}</td>
                            <td>
                                <button className='btn btn-primary' onClick={() => onSelect(user.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => onDelete(user.id)}>Delete</button>

                            </td>

                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
 }
}


export default UserList