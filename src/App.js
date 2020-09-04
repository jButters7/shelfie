import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: []
    }
  }

  componentDidMount() {
    console.log('sending to server')
    axios.get(`/api/inventory`).then((res) => {
      console.log('coming back')
      this.setState({
        inventory: res.data
      })
    })
      .catch(err => console.log('Error on Component APP 1', err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard data={this.state.inventory} />
        <Form />
      </div>
    );
  }
}

export default App;
