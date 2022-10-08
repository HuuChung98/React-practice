import React, { Component, PureComponent } from 'react'

// PureComponent sẽ tự động thực thi shouldComponentUpdate 
// Tự động kiểm tra props cũ và props hiện tại có khác nhau hay không, nếu khác mới re-render, ngược lại ko cần render 

// PureComponent khi so sánh props cũ và mới sẽ so sánh bằng shallow compare (===) 
// Khi so sánh array, object, function nó sẽ so sánh địa chỉ của vùng nhớ 

class Welcome extends PureComponent {
    shouldComponentUpdate(nextProps, nextState ) {
        if(this.props.message !== nextProps.message) {
            // Kiểm tra nếu prop mesasge hiện tại và mới khác nhau => return true => cho phép component re-render 
            return true;
        }
        // Ngược lại không cho re-render 
        return false;
    }
  render() {
    const { message } = this.props;
    console.log("WELCOME, re-render");
    return (
      <div>
        <h1>Welcome</h1>
        <h3>Message: {message}</h3>
      </div>
    )
  }
}

export default Welcome