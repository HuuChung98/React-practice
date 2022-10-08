import React from 'react'
import styles from './styles.module.scss';
import axios from 'axios';
import cln from "classnames"

const TodoList = ({ todos, onAddSuccess }) => {

    const handleCompleteTodo = async (todo) => {
        const {id, ...data} = todo;
        try {
            await axios.put(`https://62528e0f69af39728b501bf1.mockapi.io/chung/products/${id}`, { ...data, isCompleted: true});
            onAddSuccess();
            
        } catch (error) {
            console.log(error);
        }
    };
    const handleDeleteTodo = async (id) => {
        // const {id, ...data} = todo;
        try {
            await axios.delete(`https://62528e0f69af39728b501bf1.mockapi.io/chung/products/${id}`);
            onAddSuccess();
            
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <ul className="p-0">
                {todos.map((todo) => {
                    return (
                        <li className='d-flex justify-content-between align-items-center mb-4 '>
                            <div className={cln("d-flex flex-column mr-5", { [styles.todoCompleted]: todo.isCompleted })}>
                                <span>{todo.title}</span>
                                <i> {todo.description}</i>                                
                            </div>

                            <div>
                                <button
                                    className={cln("btn btn-success", {
                                        [styles.btnCompleted]: todo.isCompleted,
                                    })}
                                    onClick={() => handleCompleteTodo(todo)}>Complete</button>
                                <button className='btn btn-danger'
                                    onClick={() => handleDeleteTodo(todo.id)}>Delete</button>

                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList