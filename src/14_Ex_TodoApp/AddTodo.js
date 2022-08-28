import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ onAddSuccess}) => {
    const [todo, setTodo] = useState({ title: "", description: "", })
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setTodo((todo) => ({ ...todo, [name]: value }));
    };

    const handleAddTodo =  async () => {
        // onAddTodo(todo);
        try {
            await axios.post("https://62528e0f69af39728b501bf1.mockapi.io/chung/products", { ...todo, isCompleted: false});
            onAddSuccess();
            setTodo({ title: "", description: "",})
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <div className="form-group">
                    <label htmlFor="">Title</label>
                    <input type="text"
                        name='title'
                        value={todo.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input type="text"
                        name='description'
                        value={todo.description}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button className='btn btn-success' onClick={handleAddTodo}>Add</button>
        </div>
    )
}

export default AddTodo