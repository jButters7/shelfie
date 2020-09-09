import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
  constructor() {
    super()

    this.deleteRequest = this.deleteRequest.bind(this)
  }

  deleteRequest(id) {
    axios.delete(`/api/product/${id}`)
      .catch(err => console.log(err))
    this.props.getInventory();
  }

  render() {
    return (
      <div className='dashboard'>
        {this.props.data.map(product => {
          return (
            <Product
              key={product.id}
              product={product}
              deleteRequest={this.deleteRequest}
              editProduct={this.props.editProduct}
              setCurrentProduct={this.props.setCurrentProduct}
            />)
        })}
      </div>

    )
  }
}

export default Dashboard