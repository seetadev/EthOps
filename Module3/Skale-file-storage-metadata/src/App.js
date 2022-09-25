import React, { Component } from 'react'
import { Link } from 'react-router'
import 'bootstrap';
import { getWeb3 } from './reducers/web3/getWeb3'
import { getFiles } from './components/fileStorage/FileStorageActions'

// Images
import skale_logo from './assets/Skale_Logo_White.png'

// Styles
import './App.scss'

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  getFiles();
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
        <div className="header bg-primary">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className="navbar-brand">
              <img className="logo img-fluid" alt="SKALE" src={skale_logo}/>
            </Link>
          </nav>
        </div>
          <div className="contentWindow h-100">
          {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App
