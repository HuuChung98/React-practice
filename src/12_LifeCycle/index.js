import React, { Component } from 'react'
import Welcome from './Welcome';

export class LifeCycle extends Component {
    constructor(props) {
        super(props)
          console.log("Contructor Run");
        this.state = {
           message: "",
           count: 0,
        };
      }
    //   componentDidMount: tự động được khởi chạy 1 lần duy nhất sau khi componet được khởi tạo và chạy sau hàm render 
    //   Dùng để
    //     - setState: để componet trigger re-render 
    //     - Tương tác với DOM: addEvenListtener 
    //     - Thực thi các tác vụ side effect: Call API,  setTimeout, setInterval.
      componentDidMount(prevProps, prevState) {
        console.log("ComponentDidMount Run");

        // Delay 3s sau đó set state message
        this.timer = setTimeout(() => {
            this.setState({message: "Hello Cybersoft"});
        }, 3000);
      }

      componentDidUpdate() {

      };
      componentWillUnmount() {
        clearTimeout(this.timer);
      };
  render() {
    // console.log("Render Run");
    return (
      <div>
        <h1>Life Cycle</h1>
        {/* <h3>{this.state.message}</h3>
         */}
         <p>Count: {this.state.count}</p>
         <button onClick={() => this.setState({ count: this.state.count + 1})}>Increase</button>
         
         <Welcome message={this.state.message}/>
      </div>
    )
  }
}

export default LifeCycle