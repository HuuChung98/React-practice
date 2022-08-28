import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterTodo from './FilterTodo';
import SearchTodo from './SearchTodo';
// import { Value } from 'sass';

const FILTER = {
    all: undefined,
    completed: true,
    notYet: false,
};

const TodoApp = () => {
    const [todos, setTodos] = useState([
        // khi gọi API ta ko cần set cứng, chỉ để aray rỗng 
        // {
        //     id: "1",
        //     title: "Do Homework",
        //     description: "Do homework...",
        //     isCompleted: false,
        // },
        // {
        //     id: "2",
        //     title: "Do housework",
        //     description: "Do housework...",
        //     isCompleted: false,
        // },
    ]);

    const [filter, setFilter] = useState("all");

    const [search, setSearch ] = useState("");
    
    // const handleAddTodo = (todo) => {
    //     setTodos((todos) => [...todos, { ...todo, isCompleted: false }]);
    // };
    const handleCompleteTodo = (todoId) => {
        setTodos((todos) => todos.map((todo) => {

            // Cách 1: viết cách thường 
            // if(todo.id === todoId) {
            //     return { ...todo, isCompleted: true}
            // }
            // return todo;

            // Cách 2: Viết với toán tử bậc 3 
            return todo.id === todoId ? { ...todo, isCompleted: true} : todo;
        }));
    };
    const handleDeleteTodo = (todoId) => {
        setTodos(todos => todos.filter(todo => todo.id !== todoId))
    };

    const fetchTodos = async () => {
        try {
            const { data } = await axios.get("https://62528e0f69af39728b501bf1.mockapi.io/chung/products",
                {
                    params: {
                        title: search,
                        isCompleted: FILTER[filter],
                    }
                }
            );
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    };
    const handleFilter = (filter) => {
        setFilter(filter);
    };

    const handleSearrch = (value) => {
        setSearch(value);
    };

    // useEffect sẽ được chạy ở lần render đầu tiên và những lần sau nếu data thay đổi 
    useEffect(() => {
        // Lấy API lấy danh sách todos 
        fetchTodos();
    }, [filter, search]);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-s-6 mx-auto">
                    <h1 className='mx-auto text-center'>Todo App</h1>
                    <AddTodo onAddSuccess={fetchTodos} />
                    <SearchTodo onSearch={handleSearrch}/>
                    <TodoList todos={todos} onAddSuccess={fetchTodos} />
                    <FilterTodo onFilter={handleFilter}/>
                </div>
            </div>
        </div>
    )
}

export default TodoApp