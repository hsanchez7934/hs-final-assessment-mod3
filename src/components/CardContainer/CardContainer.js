import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchGotData } from '../../actions';
import Card from '../Card/Card.js';
import './CardContainer.css';

class CardContainer extends Component {

  componentDidMount() {
    this.props.fetchGotData();
  }

  renderCard = () => (
    this.props.gotDataArray.map( (person, index) =>
      <Card
        person={person}
        key={index} /> )
  )

  render() {
    return (
      <section className='card-container'>
        {
          this.renderCard();
        }
      </section>
    );
  }
}


CardContainer.propTypes = {
  gotDataArray: PropTypes.array,
  fetchGotData: PropTypes.func
};

const mapStateToProps = store => ({
  gotDataArray: store.gotData
});

const mapDispatchToProps = dispatch => ({
  fetchGotData: () => dispatch(fetchGotData())
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
