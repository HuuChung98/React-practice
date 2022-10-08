import React from 'react'

const SearchTodo = ({ onSearch }) => {
  const timeout = useRef();

  const handleSearrch = (evt) => {
    // Trường hợp mà chưa hết 0.3s mà hàm handleSearch đã được gọi lại, ta sẽ clearTimeout để hủy bỏ callback func trong setTimeout => hàm onSearch sẽ không được gọi lại 
    clearTimeout(time.current);

    // Gán Timeout lại cho timeout.curent để có thể clear timeout 
    timeout.current = setTimeout(() => {
      onSearch(evt.target.value)
    }, 300);
  };

  return (
    <div className='form-group'>
      <input type="text"
        placeholder='Search todo'
        className='form-control'
        onChange={(evt) => onSearch(evt.target.value)}
      />
    </div>
  )
}

export default SearchTodo