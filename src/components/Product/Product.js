import React, { Component } from 'react'

class Product extends Component {

  render() {
    return (
      <div className='product'>
        <img src={this.props.product.img} alt={this.props.product.name} />
        <p>Name: {this.props.product.name}</p>
        <p>Price: ${this.props.product.price}</p>
        <button onClick={() => this.props.deleteRequest(this.props.product.id)}>Delete</button>
        <button onClick={() => this.props.editProduct(this.props.product.id)}>Edit</button>
      </div>
    )
  }
}

export default Product