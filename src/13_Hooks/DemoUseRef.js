import React, { useEffect, useRef, useState } from 'react'

const DemoUseRef = () => {

  // Dùng ref để truy cập vào Dom của element 
  const h1Ref = useRef();

  // State
  const [username, setUsername] = useState("");
  // Ref
  const emailRef = useRef();

  // Ngoài ra ref còn dùng để lưu trữ data giống state, tuy nhiên khi ref thay đổi component không bị re-render

  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const prevCount = useRef(count); // Lưu trữ giá trị trước đó của state count 

  const handleSubmit = () => {
    // Value của state 
    console.log("State", username);
    // value của Input control bằng ref
    console.log("Ref", emailRef.current.value);
  }

  // Lưu trữ giá trijhj trước đó 
  useEffect(() => {
    // console.log(h1Ref.current);
    prevCount.current = count

  }, [count]);

  console.log("Render");
  return (
    <div>
      <h1 ref={h1Ref}>
        Demo Ref
      </h1>

      {/* State  */}
      <div className="form-group">
        <label htmlFor="">State</label>
        <input type="text"
          className='form-control'
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        />
      </div>
      {/* Ref  */}
      <div className="form-group">
        <label htmlFor="">Ref</label>
        <input type="text"
          className='form-control'
          ref={emailRef}
        />
      </div>

      <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
      <br />
      <br />

      <p>Count: {count}</p>
      <p>PreCount: {prevCount.current}</p>
      <p>CountRef: {countRef.current}</p>
      <button onClick={() => { setCount(count + 1) }}>Increase Count</button>
      <button onClick={() => countRef.current++}>Increase CountRef</button>

    </div>
  )
}

export default DemoUseRef