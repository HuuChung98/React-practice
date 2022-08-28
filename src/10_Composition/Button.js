import { type } from '@testing-library/user-event/dist/type';
import React from 'react'
import { Component } from 'react';

function Button({ variant, className, children,...props}) {
  let classes = `btn btn-${variant} ${className}`;
  return (
    <div>
        <button {...props} className={classes}>
            {children}
        </button>
    </div>
  )
}
// Gọi 1 Component button và ko muốn truyền type ta sử dụng default 
Button.defaultProps = {
    type: "button",
    disable: false,
    className: "",
};

export default Button

