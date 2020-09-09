import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
      <div className='header'>
        <h2>Shelfie</h2>
        <button className='header-btn'>Dashboard</button>
        <button className='header-btn'>Add Inventory</button>
      </div>
    )
  }
}

export default Header