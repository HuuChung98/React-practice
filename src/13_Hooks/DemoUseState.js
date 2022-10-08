// sử dụng rafce: sử dụng với kĩ thuật Hooks
import React, { useState } from 'react'

// Đếuwr dụng state trong function component ta import ueState 
const DemoUseState = () => {
    // useState returrn về 1 array gồm 2 phần tử:
    // count: giá trị hiện tại của State 
    // phần tử thứ 2: là 1 hàm thay ddoooir các giá trị phía trước  
    const [count, setCount] = useState(0);
    // Để tạo nhìu state ta chỉ cần gọi useState nhiều lần 
    const [message, setMessage] = useState("");
    // State là array 
    const [users, setUser] = useState(["CHung", "Lan", "Nam"]); 

    // demo state là Object
    const [values, setValues] = useState({ username: "", email: ""})  // setValues ở đây là state của object, values là giá trị hiện tại

    const handleAddUser = () => {
        const name = prompt("Vui lòng nhập tên của bạn:");
        setUser((state) => [...state, name]);
    }
    const handleDeleteUser = () => {
        const name = prompt("Vui lòng nhập tên của bạn:");
        const newUsers = users.filter((user) => user !== name)
        setUser(newUsers);
    }
    const handleChange = (evt) => {    // giá trị nhận được từ evt 
        const { name, value } = evt.target;
        setValues((state) => ({ ...state, [name]: value})) // name làm dynamic key và value là giá trị truyền vào.
    }

    return (
        <div>
            <h1>UseState</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <p>Message: {message}</p>
            <button onClick={() => setMessage("Hello World!")}>Change Message</button>

            <br />
            <h2>Demo array</h2>
            <h3>
            {users.map((user, index) => (
                <p key={index}>{user}</p>
            ))}
            </h3>
            <button onClick={handleAddUser}>Add User</button>
            <button onClick={handleDeleteUser}>Delete User</button>
            
            <br />
            <br />

            <h3>Demo Object</h3>
            <div>
                <label htmlFor="">UserName</label>
                <input type="text" 
                    name='username'
                    value={values.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" 
                    name='email'
                    value={values.email}
                    onChange={handleChange}

                />
            </div>
        </div>
    )
}

export default DemoUseState;