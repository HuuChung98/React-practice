import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addColor, removeColor } from "../Redux/slices/colors";

const Color = () => {
    // useSelector nhận vào 1 callback có params lá state tổng của store, nếu muốn truy cập vào 1 reducer con ta return về state chấm tới tên của reducer khai báo trong rootReducer 
    const { colors } = useSelector((state) => state.color);
    const dispatch = useDispatch();

    const handleAddColor = () => {
        const color = prompt("Input your color");
        dispatch(addColor(color));
    };
    
    const handleRemoveColor = () => {
        const color = prompt("Remove your color");
        dispatch(removeColor(color));
    };


    return (
        <div>
            <p>Colors: {colors.join(", ")}</p>
            <button onClick={handleAddColor}>Add color</button>
            <button onClick={handleRemoveColor}>Remove color</button>

        </div>
    )
}

export default Color