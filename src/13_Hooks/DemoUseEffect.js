import { cleanup } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
// useEffect sử dụng để thay thế các khía niệm LifeCycle 

/**
  *MOUNTING:
  *- rendering
  *- run useEffect()
  *
  * UPDATING: (props hoặc state thay đổi)
  * -rendering
  * run useEffect() cleanup - Nếu dependencies thay đổi
  * run useEffect() - Nếu dependencies thay đổi
  * 
  * 
  * UNMOUNTING:
  * - run useEffect() cleanup
 **/

const DemoUseEffect = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    useEffect(() => {
        // / Được chạy sau mỗi lần re-render
        // Thực thi nhưng logic side efect: call API, setTimeout, OUT ...
        console.log('effect 1');

        // cleanup effect 
        // Được chạy trước lần run effect tiếp theo hoặc khi component bị unmount 

        return () => {
            // Trước khi bắt đầu run effect mới ta cần cleanup: cancel API, clearTimerout 
            // return này sẽ chạy trước consolelog phía trên 
            console.log('cleanup effect 1');
        }

    });

    // Với tham số thứ 2 là 1 array rỗng useEffect này sẽ tự động được thực thi 1 lần duy nhất sau lần render đầu tiên 
    useEffect(() => {
        console.log('effect 2, []');
        // cleanup effect 
        // Được chạy khi component bị unmount 

        return () => {
            // Trước khi bắt đầu run effect mới ta cần cleanup: cancel API, clearTimerout 
            // return này sẽ chạy trước consolelog phía trên 
            console.log('cleanup effect 2');
        }
    }, []);

        // Với tham số thứ 2 là 1 array có chứa các biến state hoặc props, useEffect này sẽ tự động được thực thi ơt lần render đầu tiên và những lần render tiếp theo kèm theo điều kiện  là giá trị state hawocj props truyền vào arar bị thay đổi
    useEffect(() => {
        console.log('effect 3, [count]');
            // cleanup effect 
            // Được chạy khi component bị unmount 
        
        return () => {
                // Trước khi bắt đầu run effect mới ta cần cleanup: cancel API, clearTimerout 
                // return này sẽ chạy trước consolelog phía trên 
                console.log('cleanup effect 3');
        }

    }, [count]);

    const handleSetColor = () => {
        const color = prompt('Input color:');
        setColor(color)
    }

    console.log('Component render');
    return (
        <div>
            <h1>UseEffect</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <br />
            <br />
            <p>Color: {color}</p>
            <button onClick={handleSetColor}>Set color</button>
        </div>
    )
}

export default DemoUseEffect