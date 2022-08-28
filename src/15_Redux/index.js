import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Color from './Color';

const DemoRedux = () => {
    // Dùng hook useSelector để kết nối tới redux store và lấy state về sử dụng trong component 

    const state = useSelector((state) => state);
    console.log(state);

    // Dùng hook useDispatch để gửi 1 action thay đổi state lên redux store 
    const dispatch = useDispatch();
    const increase = () => {
        // dispatch là phương thức để gửi action lên redux store 
        // action của redux llaf 1 object, bắt buộc có 1 key là type để mô tả action 
        const action = { type: "INCREASE" };
        dispatch(action);
    };

    return (
        <div>
            <h1>Demo Redux</h1>
            <p>Count: {state.count}</p>
            {/* <button onClick={() => dispatch({ type: "INCREASE"})}>Increase</button> */}
            <button onClick={increase}>Increase</button>
            <button onClick={increase}>Decrease</button>

            <br />
            <h1>Color</h1>
            <Color />

        </div>
    )
}

export default DemoRedux