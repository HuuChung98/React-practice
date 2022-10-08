import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from "../Redux/slices/count";

const Count = () => {
    // Dùng hook useSelector để kết nối tới redux store và lấy state về sử dụng trong component 

    const count = useSelector((state) => state.count);
    // console.log(state);

    // Dùng hook useDispatch để gửi 1 action thay đổi state lên redux store 
    const dispatch = useDispatch();
    const handleIncreate = () => {
        // dispatch là phương thức để gửi action lên redux store 
        // action của redux llaf 1 object, bắt buộc có 1 key là type để mô tả action 
        // const action = { type: "INCREASE" };
        // dispatch(action);

        // action duoc tao ra tu createSlice cua redux toolskit 
        dispatch(increase());
    };

    return (
        <div>
            <h1>Demo Redux</h1>
            <p>Count: {count}</p>
            {/* <button onClick={() => dispatch({ type: "INCREASE"})}>Increase</button> */}
            <button onClick={handleIncreate}>Increase</button>
            <button onClick={() => dispatch(decrease())}>Decrease</button>
        </div>
    )
}

export default Count;