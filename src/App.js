import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';
import { HashRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      currentProduct: {},
      editing: false
    }
    this.getInventory = this.getInventory.bind(this)
    this.editProduct = this.editProduct.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.checkState = this.checkState.bind(this)
  }

  getInventory() {
    axios.get(`/api/inventory`)
      .then(res => this.setState({ inventory: res.data }))
      .catch(err => console.log('Error getInventory', err))
    console.log('got inventory')
  }

  componentDidMount() {
    this.getInventory();
  }

  setCurrentProduct(id) {
    console.log(id)
    let product = {}
    for (let i = 0; i < this.state.inventory.length; i++) {
      if (this.state.inventory[i].id === id) {
        product = this.state.inventory[i];
      }
    }
    this.setState({
      currentProduct: product
    })
  }


  editProduct(id) {
    this.setCurrentProduct(id)
    if (this.state.editing === false) {
      this.setState({
        editing: true,
      })
    } else {
      console.log('already true')
    }
  }

  saveChanges() {
    if (this.state.editing === true) {
      this.setState({
        editing: false
      })
    } else {
      console.log('already false')
    }
  }

  checkState() {
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header />
          <Dashboard data={this.state.inventory} getInventory={this.getInventory}
            editProduct={this.editProduct}
            setCurrentProduct={this.setCurrentProduct} />
          <Switch>
            {/* <Route path='/dashboard' render={props =>
              <Dashboard {...props}
                data={this.state.inventory} getInventory={this.getInventory}
                editProduct={this.editProduct}
                setCurrentProduct={this.setCurrentProduct} />} /> */}

            <Form
              getInventory={this.getInventory}
              appState={this.state}
              saveChanges={this.saveChanges}
              checkState={this.checkState}
              editing={this.state.editing}
            />
          </Switch>
          {/* <button onClick={() => this.checkState()}>Check state</button> */}
        </HashRouter>
      </div>
    );
  }
}

export default App;
