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
import rootReducer from "./Redux/reducers";

// configurationStore ==> mac dinh la da cai DevTools va Redux-thunk
const store = configureStore({
    reducer: rootReducer,
    // devTools: true, // setup Redux Devtool, neu ko viet key nay ra ==> mac dinh la true 
    // middleware: dung de them cac redux middlewares(mac dinh da co san thunk)
});

export default store;
