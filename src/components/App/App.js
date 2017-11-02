import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchGotData } from '../../actions';
class App extends Component {


  componentDidMount() {
    this.props.fetchGotData();
  }

  render() {
    console.log(this.props);
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
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fake: shape({ fake: string }),
  fakeAction: func.isRequired
};

const mapStateToProps = store => ({
  gotDataArray: store.gotData
});

const mapDispatchToProps = dispatch => ({
  fetchGotData: () => dispatch(fetchGotData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
