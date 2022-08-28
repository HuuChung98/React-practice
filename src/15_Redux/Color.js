import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Color = () => {
    // useSelector nhận vào 1 callback có params lá state tổng của store, nếu muốn truy cập vào 1 reducer con ta return về state chấm tới tên của reducer khai báo trong rootReducer 
    const { colors } = useSelector((state) => state.color);
    const dispatch = useDispatch();
    const addColor = () => {
        const color = prompt("Input your color: ");
        // type: bắt buộc phải có trong dispatch
        // data: bổ nghĩa cho type
        dispatch({ type: "ADD_COLOR", data: color});
    };
    const removeColor = () => {
        const color = prompt("Input your color: ");
        dispatch({ type: "REMOVE_COLOR", data: color});
    };


    return (
        <div>
            <p>Colors: {colors.join(", ")}</p>
            <button onClick={addColor}>Add color</button>
            <button onClick={removeColor}>Remove color</button>

        </div>
    )
}

export default Color