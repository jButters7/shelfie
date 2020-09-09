import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: '',
      name: '',
      price: 0,
      id: this.props.appState.currentProduct.id,
      edit: false
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
      price: 0,
      id: this.props.appState.currentProduct.id,
      edit: false
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
    this.props.getInventory();
    // console.log(this.props.getInventory())
  }

  handleEdit() {
    const { img, name, price, id } = this.state
    console.log(this.props.appState.currentProduct.id)
    console.log('form state', this.state)
    this.props.checkState()
    axios.put(`/api/product/${this.props.appState.currentProduct.id}`, { img, name, price })
      .then(res => {
        this.setState({
          inventory: res.data
        })
      })
      .catch(err => console.log('Error on handleEdit', err))
    this.props.getInventory();
  }




  render() {
    return (
      <div>
        <img src={this.props.appState.currentProduct.img} />
        <p>Image URL:</p>
        <input placeholder='Img URL' onChange={(e) => this.handleImgChange(e)} defaultValue={this.props.appState.currentProduct.img} ></input>
        <p>Product Name:</p>
        <input placeholder='Product Name' onChange={(e) => this.handleNameChange(e)} defaultValue={this.props.appState.currentProduct.name} ></input>
        <p>Price:</p>
        <input placeholder='0' onChange={(e) => this.handlePriceChange(e)} defaultValue={this.props.appState.currentProduct.price} ></input>
        <div>
          <button onClick={this.handleCancel}>Cancel</button>
          {this.props.editing ? <button onClick={() => this.handleEdit()}>Save Changes</button> : <button onClick={this.addProduct}>Add to Inventory</button>}
        </div>
      </div>
    )
  }
}

export default Form