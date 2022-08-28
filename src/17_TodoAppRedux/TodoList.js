import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTodos } from "../Redux/actions/todo";

import TodoItems from './TodoItems';

export default function TodoList() {

    
    const { todos, search } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    // const fetchTodos = async () => {
    //     try {
    //         // dua API vao day
    //         // Call API
    //         const { data } = await axios.get("https://62528e0f69af39728b501bf1.mockapi.io/chung/products");
    //         // ==> Thanh cong
    //         dispatch({ type: "GET_TODOS", data});
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        // fetchTodos();
        dispatch(getTodos());
    }, [search]);
  return (
    <ul>
        {todos.map((todo) => {
            return <TodoItems key={todo.id} todo={todo} />;
        })}
    </ul>
  );
}
