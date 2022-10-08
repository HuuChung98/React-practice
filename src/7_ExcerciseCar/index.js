import React, { Component } from 'react'

export class ExchangeCar extends Component {
    constructor() {
        super();
        this.state = {
            imgCar: "./img/red-car.jpg",
        };
    }

    changeColor = (color) => {
        this.setState({
            imgCar: `./img/${color}-car.jpg`,
        });
    }
  render() {
    return (
      <div className='container'>
        <div className="row">
            <div className="col-sm-8">
                <h1>
                    Please choose your color for the Car
                </h1>
                <img src={this.state.imgCar} alt="redCar" width="100%"/>
            </div>
            <div className="col-sm-4">
                <button className='btn btn-danger' onClick={() => this.changeColor("red")}> Red Color</button>
                <button className='btn btn-secondary' onClick={() => this.changeColor("silver")}> Silver Color</button>
                <button className='btn btn-dark' onClick={() => this.changeColor("black")}> Black Color</button>


            </div>
        </div>

      </div>
    )
  }
}

export default ExchangeCar