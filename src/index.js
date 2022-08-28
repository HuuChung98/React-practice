import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';  // cung cấp nhưng state của redux cho những component ở redux 
import rootReducer from './Redux/reducers';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// const middleware = applyMiddleware(thunk);
// Gop redux devtool voi middleware lai thanh 1 tham so duy nhat de truyen vao store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);
const store = createStore(rootReducer, 
  enhancer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
console.log("state default", store.getState());

// Để thay đổi state, ta cần dispatch 1 action 
// action là 1 object có 1 key bắt buộc là type 
store.dispatch({ type: "INCREASE" });
console.log("state sau khi dispatch", store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
