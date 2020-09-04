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
    this.props.componentDidMount();
    console.log('hit delete')
  }

  render() {
    return (
      <div>
        {/* {console.log(this.props.data)} */}
        {this.props.data.map(product => {
          return (
            <Product key={product.id} product={product} deleteRequest={this.deleteRequest} />)
        })}
      </div>

    )
  }
}

export default Dashboard