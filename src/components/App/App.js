import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import CardContainer from '../CardContainer/CardContainer.js';

export default class App extends Component {

  componentDidMount() {
    fetch(` http://localhost:3001/api/v1/houses`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(res => console.log(res))
  }


  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          {/* <CardContainer /> */}
        </div>
      </div>
    );
  }
}
