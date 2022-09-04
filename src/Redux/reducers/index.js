import { combineReducers } from "redux";
import countReducer from "./count";
import colorReducer from "./colors";
import cartReducer from "./cart";
import todoReducer from "./todo";


const rootReducer = combineReducers( { 
    count: countReducer,  // child reducer 
    color: colorReducer,  // child reducer
    cart: cartReducer,
    todo: todoReducer,
} );

export default rootReducer;