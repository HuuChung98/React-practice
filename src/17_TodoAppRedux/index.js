import React from 'react';
import AddTodo from './AddTodo';
import FilterTodo from './FilterTodo';
import SearchTodo from './SearchTodo';
import TodoList from './TodoList';

export default function ToDoApp() {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-s-6 mx-auto">
                    <h1 className='mx-auto text-center'>Todo App</h1>
                    <AddTodo />
                    <SearchTodo />
                    {/*  Goi API lay danh sach ve de hien thi tren Giao dien */}
                    <TodoList />  
                    <FilterTodo />
                </div>
            </div>
        </div>

    )
}
