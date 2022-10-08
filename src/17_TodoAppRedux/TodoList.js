import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getTodos } from "../Redux/actions/todo";
import { getTodos } from '../Redux/slices/todo';

import TodoItems from './TodoItems';

export default function TodoList() {

    
    const { todos, search, isLoading, error } = useSelector((state) => state.todo);
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
    if(isLoading) {
      // tra ve 1 component Loading
      // <Loading /> 
      return <h1>Loading...</h1>
    };
    if(error) {
      // <Error error={error} />
      return <div className='alert alert-danger'>{error}</div>
    }
  return (
    <ul>
        {todos.map((todo) => {
            return <TodoItems key={todo.id} todo={todo} />;
        })}
    </ul>
  );
}
