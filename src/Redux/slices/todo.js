import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
    todos: [],
    search: "",
    filter: "all",
    isLoading: false, // loading flag: Hien thi loading khi call API 
    error: null, // nhan loi tu API
};

export const getTodos = createAsyncThunk(
    "todo/getTodos",
    // Ham call API, goi API  va tra ve data, viec dispatch va action pending, fullfilded va reject se do createAsyncThunk xu ly giup
    // No se nhan vao 2 params
    // - param 1: param truyen vao khi goi ham
    // - param 2: la thunk API gom 1 dispatch va 1 getState
    async ( _,{ getState }) => {
        try {
            const { search } = getState().todo;
            const { data } = await axios.get("https://62528e0f69af39728b501bf1.mockapi.io/chung/products",
                {
                    params: {
                        title: search,
                    },
                });
                return data;
        } catch (error) {
            console.log(error);
        }

    },
);

const todoSlice = createSlice(
    {
        name: "todo",
        initialState,
        reducers: {
            getTodoPending(state) {
                return { ...state, isLoading: true }
            },
            getTodoFullfiled(state, action) {
                return {
                    ...state, isLoading: false, todos: action.payload
                };
            },
            getTodoRejected(state, action) {
                return {
                    ...state, isLoading: false, error: action.payload
                };
            },
        },

        extraReducers: {
            [getTodos.pending]: (state) => {
                return {...state, isLoading:true};
            },
            [getTodos.fulfilled]: (state, action) => {
                return {...state, isLoading: false, todos: action.payload};
            },
            [getTodos.rejected]: (state, action) => {
                return {...state, isLoading: false, error: action.payload }
            }
        },
    },

);

const { getTodoPending, getTodoFullfiled, getTodoRejected } = todoSlice.actions;

// export const getTodos = () => {
//     return async (dispatch, getState) => {
//         try {
//             // getState la ham lay state truc tiep tu store 
//             const { search } = getState().todo;
//             // dua API vao day
//             dispatch(getTodoPending());


//             // Truoc khi call API dispatch action pending 

//             // Call API
//             const { data } = await axios.get("https://62528e0f69af39728b501bf1.mockapi.io/chung/products",
//                 {
//                     params: {
//                         title: search,
//                     },
//                 });
//             dispatch(getTodoFullfiled(data));

//         } catch (error) {
//             // console.log(error);
//             // Neu that bai se dispatch error
//             dispatch(getTodoRejected(error.response.data)); // error.response.error la format cua axios 
//         }
//     };
// };

export default todoSlice.reducer;