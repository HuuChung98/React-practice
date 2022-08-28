import React, { Component } from 'react'
import UserForm from './UserForm'
import UserList from './UserList'
// import data from './data.json'
import axios from 'axios'
import SearchUser from './SearchUser'

export class UserManagement extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            users: [],
            selectedUser: {},
            search: "",
        };
    }
    handleDeleteUser = async (userId) => {
        console.log(userId);
        // Xử lý xóa user 
        // const users = this.state.users.filter((user) => user.id !== userId);
        // this.setState({ users });
        await axios.delete(
            `https://62528e0f69af39728b501bf1.mockapi.io/chung/products/${userId}`
        );
        // Gọi tới API lấy giao diện mới 
        this.handleGetUsers();
    };
    // handleCreateUser = (user) => {
    //     console.log(user);
    //     // Xử lý thêm users  
    //     const id = "000" + Math.floor(Math.random() * 100);
    //     this.setState((state) => (
    //         {
    //             users: [...state.users, { ...user, id}],
    //         }
    //     ));

    // }
    // handleSubmit = (user) => {
    //     console.log(user);
    //     if (user.id) {
    //         // Cập nhật user
    //         const users = this.state.users.map(item => {
    //             if (item.id === user.id) {
    //                 return user;
    //             }
    //             return item;
    //         });
    //         this.setState({ users });

    //     }
    //     else {
    //         // Xử lý thêm users  
    //         const id = "000" + Math.floor(Math.random() * 100);
    //         this.setState((state) => (
    //             {
    //                 users: [...state.users, { ...user, id }],
    //             }
    //         ));
    //     }
    // };
    handleSelectUser = async (userId) => {
        if(userId === this.state.selectedUser.id) {
            return;
        }
        // console.log(user);
        // Xử lý setstate user nhận được 
        // GỌi API  
        try {
            const { data } = await axios.get(`https://62528e0f69af39728b501bf1.mockapi.io/chung/products/${userId}`);
            this.setState({ selectedUser: data });
        } catch (error) {
            console.log(error);
        }

        
    };

    handleGetUsers = async () => {
        try {
            const { data } = await axios.get('https://62528e0f69af39728b501bf1.mockapi.io/chung/products',
            {
                params: {
                    name: this.state.search,
                },
            }
            );
            // Gọi thành công, set data từ API cho state user 
            this.setState({ users: data })
        } catch (error) {
            console.log(error);
        }
    };
    handleSearchUser = (searchString) => {
        //PA1:
        // this.handleGetUsers(searchString);
        // PA2: 
        this.setState( { search: searchString });
    };
    componentDidMount() {
        // Gọi tới hàm  this.handleGetUsers 
        this.handleGetUsers();
    }
    componentDidUpdate(_, prevState) {
        if(prevState.search !== this.state.search) {
            this.handleGetUsers();
        }
    }


    render() {
        const { users, selectedUser } = this.state
        return (
            <div className='container'>
                <h1 className='text-center'>User Management</h1>
                <UserForm
                    // key={selectedUser.id}
                    user={selectedUser}
                    onSubmitSuccess={this.handleGetUsers} />
                <SearchUser onSearch = {this.handleSearchUser}/>    
                <UserList 
                    users={users}
                    onDelete={this.handleDeleteUser}
                    onSelect={this.handleSelectUser}
                />
            </div>
        )
    }
}

export default UserManagement