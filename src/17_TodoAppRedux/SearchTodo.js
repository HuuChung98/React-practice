import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { changeSearch } from '../Redux/actions/todo';

export default function SearchTodo() {
  const inpRef = useRef();

  const dispatch = useDispatch();

  const handleSearch = () => {
    const value = inpRef.current.value;
    // Tiep theo gui action thay doi state search
    dispatch(changeSearch(value))
  }

  return (
    <div className='form-inline mb-4'>
      <input ref={inpRef} type="text" className='form-control' />
      <button className='btn btn-primary ml-3' onClick={handleSearch}> Search </button>
    </div>
  )
}
