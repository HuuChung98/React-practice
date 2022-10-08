import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';  // cung cấp nhưng state của redux cho những component ở redux
import { BrowserRouter} from "react-router-dom"

import './index.css';
import App from './App';

import store from './store';

console.log("state default", store.getState());

// Để thay đổi state, ta cần dispatch 1 action 
// action là 1 object có 1 key bắt buộc là type 
store.dispatch({ type: "INCREASE" });
console.log("state sau khi dispatch", store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

