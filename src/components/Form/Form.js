import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      img: '',
      name: '',
      price: 0
    }
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }


  handleImgChange(e) {
    this.setState({
      img: e.target.value
    })
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handlePriceChange(e) {
    const priceInt = parseInt(e.target.value);
    this.setState({
      price: priceInt
    })
  }

  handleCancel() {
    document.querySelectorAll('input').forEach(
      input => (input.value = '')
    );
    this.setState({
      img: '',
      name: '',
      price: 0
    })
  }

  addProduct() {
    const { img, name, price } = this.state
    axios.post(`/api/product`, { img, name, price })
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
      .catch(err => console.log('Error on Component Form 1', err))

    this.handleCancel();
    this.props.componentDidMount();
  }

  componentDidUpdate() {

  }


  render() {
    return (
      <div>
        <p>Image URL:</p>
        <input placeholder='Img URL' onChange={(e) => this.handleImgChange(e)} ></input>
        <p>Product Name:</p>
        <input placeholder='Product Name' onChange={(e) => this.handleNameChange(e)} ></input>
        <p>Price:</p>
        <input placeholder='0' onChange={(e) => this.handlePriceChange(e)} ></input>
        <div>
          <button onClick={this.handleCancel}>Cancel</button>
          <button onClick={this.addProduct}>Add to Inventory</button>
        </div>
      </div>
    )
  }
}

export default Form