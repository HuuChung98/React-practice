import React from 'react'
import Button from './Button'
import Card from './Card'

function Composition() {
  return (
    <div>
      <Button type="button" variant="primary"> 
          Primary
      </Button>
      <Button type="button" variant="secondary"> 
          Secondary
      </Button>
      <Button type="button" variant="danger" className="w-50"> 
          Danger
      </Button>
      <Button type="button" variant="light"> 
          Light
      </Button>
      <br />

      <br />

      <Card heading="Student"
            headerClassName='bg-warning'
            footer={<button 
            className='btn btn-primary'
            >Detail</button>}>
        <h3>Name: Nguyen Duc Dan</h3>
        <p>Class: BC19</p>
      </Card>
      <Card heading="Product" headerClassName='bg-danger' footer={<button className='btn btn-success'>Buy</button>}>
        <h3>Name: product</h3>
        <img src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/1453042981.jpeg" alt="iphone X" width="300px" height="300px"/>
      </Card>

    </div>
  )
}

export default Composition