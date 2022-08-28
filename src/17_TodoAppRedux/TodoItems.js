import React from 'react';
import cln from "classnames";
import styles from "./styles.module.scss";
import { useDispatch } from 'react-redux';

import { completeTodo, deleteTodo } from "../Redux/actions/todo"

export default function TodoItems({ todo }) {

    // const handleDeleteTodo = async () => {
    //     // Call API de delete todo
    //     try {
    //         await axios.delete(`https://62528e0f69af39728b501bf1.mockapi.io/chung/products/${todo.id}`);
    //         // sau khi delele thanh cong, ta goi pros onDeleteSuccess de bao cho component cha biet da xoa thanh cong va cal API de re-render lai data tren giao dien 
    //         onDeleteSuccess();
    //     } catch (error) {
    //         console.log(error);
    //     }

    // };
    const dispatch = useDispatch();
    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todo.id));
    };

    const handleCompleteTodo = () => {
        dispatch(completeTodo(todo));
    };

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
                   onClick={handleCompleteTodo} >Complete</button>
                <button className='btn btn-danger'
                    onClick={handleDeleteTodo} >Delete</button>
            </div>
        </li>
    )
}
