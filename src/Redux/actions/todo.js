import axios from 'axios';

import * as actionTypes from "../constants/todo"
// import { useDispatch } from 'react-redux';

// Can phai su dung 1 redux middleware la redux thunk de co the call API trong action sau do dispatch 1 action moi de gui data toi store

// redux thunk la mot redux middle cho phep viet cac action tra ve 1 function thay vi la mot object bang cach tri hoan viec dua action ve reducer

export const getTodos = () => {
    return async (dispatch, getState) => {
        try {
            // getState la ham lay state truc tiep tu store 
            const { search } = getState().todo;
            // dua API vao day
            dispatch({ type: actionTypes.GET_TODOS_PENDING});
            // Truoc khi call API dispatch action pending 

            // Call API
            const { data } = await axios.get("https://62528e0f69af39728b501bf1.mockapi.io/chung/products",
            {
                params: {
                    title: search,
                },
            });
            // Thanh cong ==> dispatch action ve action gui du lieu vao store 
            // return {
            //     type: "GET_TODOS",
            //     data,
            // }
            // ==> Thanh cong ==> dispatch action thanh FULLFILED
            dispatch({ type: actionTypes.GET_TODOS_FULLFILLED, data});
        } catch (error) {
            // console.log(error);
            // Neu that bai se dispatch error
            dispatch( { type: actionTypes.GET_TODOS_REJECTED,
            error: error.response.data, }); // error.response.error la format cua axios 
        }
    };
}; 

export const deleteTodo = (todoId) => {
    // return ve 1 function middleware
    return async (dispatch) => {
        try {
            await axios.delete(`https://62528e0f69af39728b501bf1.mockapi.io/chung/products/${todoId}`);
            // Thanh cong => goi tiep toi action getTodos 
            dispatch(getTodos());
        } catch (error) {
            console.log(error);
        }
    };
};

export const completeTodo = (todo) => {
    return async (dispatch) => {
        const {id, ...data} = todo;
        try {
            await axios.put(`https://62528e0f69af39728b501bf1.mockapi.io/chung/products/${todo.id}`, { ...data, isCompleted: true});
            dispatch(getTodos());
            
        } catch (error) {
            console.log(error);
        }
    };

};
export const changeSearch = (value) => {
    return {
        type: actionTypes.CHANGE_SEARCH,
        data: value,
    };
};