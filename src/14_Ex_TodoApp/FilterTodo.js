import React from 'react'

const FilterTodo = ({ onFilter }) => {
  return (
    <div>
      <button className='btn btn-secondary' onClick={() => onFilter("all")}>All</button>
      <button className='btn btn-success' onClick={() => onFilter("completed")}>Completed</button>
      <button className='btn btn-warning' onClick={() => onFilter("notYet")}>Not Yet</button>

    </div>
  )
}

export default FilterTodo