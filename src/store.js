// import thunk from 'redux-thunk';  // redux-saga
// import rootReducer from './Redux/reducers';
// import { createStore, applyMiddleware, compose } from "redux";

// // const middleware = applyMiddleware(thunk);
// // Gop redux devtool voi middleware lai thanh 1 tham so duy nhat de truyen vao store
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
//     // other store enhancers if any
// );
// const store = createStore(rootReducer, enhancer,
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// ===============================================^^==============================================

// Import voi Redux Toolkit

import { configureStore } from "@reduxjs/toolkit";
// import todo from "./Redux/reducers/todo";
// import colors from "./Redux/reducers/colors";
import cart from "./Redux/reducers/cart";

import count from "./Redux/slices/count";
import colors from "./Redux/slices/colors";
import todo from "./Redux/slices/todo";

// configurationStore ==> mac dinh la da cai DevTools va Redux-thunk
const store = configureStore({
    reducer: {
        todo,
        colors,
        cart,
        count
    },

});

export default store;
