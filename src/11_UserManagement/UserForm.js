import React, { Component } from 'react'
import axios from 'axios'

class UserForm extends Component {
    constructor(props) {
        super(props);
        //   console.log("Run contructor");
        this.state = {
            // values: quản lý tất cả các giá trị input của form
            values: {
                id: props.user.id || "",
                name: props.user.name || "",
                gender: props.user.gender || "",
                email: props.user.email || "",
                address: props.user.address || "",
                dateOfBirth: props.user.dateOfBirth || "",
            },

            // error: quản lý lỗi từ server trả về 
            error: null,
        };
    }
    handleChange = (evt) => {
        const { name, value } = evt.target;
        // khi thay đổi state là 1 object , mà ta chỉ muốn thay đổi 1 giá trị bên trong object đó, ta phải sao chép lại object đó, sau đó thay đổi phần cần sao chép 
        this.setState((state) => (
            {
                values: {
                    ...state.values,
                    [name]: value,
                },
                // [name]: value,
            }
        )
        )
    }
    // handleSubmit = (evt) =>{
    //     evt.preventDefault();
    //     // Gửi thông tin của form lên component cha để thêm vào danh sách users 
    //     // const { values, onCreate } = this.state;
    //     this.props.onCreate(this.state.values)

    // }
    handleSubmit = async (evt) => {
        evt.preventDefault();
        // Gửi thông tin của form lên component cha để thêm/cập nhật vào danh sách users 
        // const { values, onCreate } = this.state;
        // this.props.onSubmit(this.state.values)
        const { id, ...payload } = this.state.values;
        try {
            if(id) {
                // Cập nhật 
                await axios.put(`https://62528e0f69af39728b501bf1.mockapi.io/chung/products/${id}` , payload);
            }else {
                // thêm mới 
                await axios.post("https://62528e0f69af39728b501bf1.mockapi.io/chung/products" , payload);
            } 
                    // Reset Form 
            this.setState({
                values: {
                    id: "",
                    name:  "",
                    gender: "",
                    email: "",
                    address: "",
                    dateOfBirth:  "",
                }
            })
            // Thành công gọi props onSubmitSuccess, để báo cho component cha biết và gọi API get users 
            this.props.onSubmitSuccess();
        } catch (error) {
            // Có lỗi từ server trả về => setState cho biến error 
            this.setState( { error: error.response.data })
        }




    }
    componentDidUpdate(prevProps) {
        // Khi props thay đổi, component sẽ re-render và gọi tới hàm này 
        if(prevProps.user.id !== this.props.user.id) {
            // setState giá trị hiện tại của props user cho state values 
            this.setState({ values: this.props.user });
        }
    }
    render() {
        const { values } = this.state;
        return (
            <form className='row' onSubmit={this.handleSubmit}>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id='name'
                            name='name'
                            value={values.name}
                            className='form-control'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select
                            name="gender"
                            value={values.gender}
                            id="gender"
                            className='form-control'
                            onChange={this.handleChange} >
                            <option value="selected">Selected Gender</option>
                            <option value="1">Men</option>
                            <option value="2">Woman</option>
                            <option value="3">other</option>
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="dateOfBirth">Date of birth</label>
                        <input
                            type="text"
                            id='dateOfBirth'
                            name="dateOfBirth" value={values.dateOfBirth}
                            className='form-control'
                            onChange={this.handleChange}
                        />

                    </div>

                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="input"
                            id='email'
                            name='email'
                            value={values.email}
                            className='form-control'
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            id='address'
                            name='address'
                            value={values.address}
                            className='form-control'
                            onChange={this.handleChange}
                        />

                    </div>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        )
    }
}

export default UserForm