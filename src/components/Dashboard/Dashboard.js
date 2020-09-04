import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {

  render() {
    return (
      <div>
        {/* {console.log(this.props.data)} */}
        {this.props.data.map(product => {
          return (
            <Product product={product} />)
        })}
      </div>

    )
  }
}

export default Dashboard