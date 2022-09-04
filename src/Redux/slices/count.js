import { createSlice } from '@reduxjs/toolkit';

// Thong thuonng khi lam viec voi Redux ta se co 3 file
//  + action  
//  + contants
//  + reducers 

// createSlice se giup don gian hoa cach lam viec voi redux. Thay vi phai tach ra 3 file action, constant, reducer ta chi can lam viec voi createSlice la du 

const countSlice = createSlice(
    {
        name: "count",   // key dinh danh cho slice(phai la duy nhat)
        initialState: 0,  // default state
        reducers: {
            increase(state) {
                return state + 1;
            },
            decrease(state) {
                return state - 1;
            },
    
        },
    }
);

// export action;
export const { increase, decrease } = countSlice.actions;

// export reducer 
export default countSlice.reducer;