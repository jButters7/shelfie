import React, { Component } from 'react'

class Product extends Component {

  render() {
    return (
      <div>
        <p>Img: {this.props.product.img}</p>
        <p>Name: {this.props.product.name}</p>
        <p>Price: {this.props.product.price}</p>

      </div>
    )
  }
}

export default Product