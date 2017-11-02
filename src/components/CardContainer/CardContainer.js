import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchGotData, fetchSwornMembers } from '../../actions';
import Card from '../Card/Card.js';
import './CardContainer.css';

class CardContainer extends Component {

  componentDidMount() {
    this.props.fetchGotData();
  }

  renderCard = () => (
    this.props.gotDataArray.map( (person, index) =>
      <Card
        swornMembersArray={this.props.swornMembersArray}
        person={person}
        key={index}
        fetchSwornMembers={this.props.fetchSwornMembers} /> )
  )

  render() {
    return (
      <section className='card-container'>
        {
        this.renderCard()
        }
      </section>
    );
  }
}


CardContainer.propTypes = {
  gotDataArray: PropTypes.array,
  fetchGotData: PropTypes.func,
  fetchSwornMembers: PropTypes.func
};

const mapStateToProps = store => ({
  gotDataArray: store.gotData,
  swornMembersArray: store.swornMembers
});

const mapDispatchToProps = dispatch => ({
  fetchGotData: () => dispatch(fetchGotData()),
  fetchSwornMembers: (array) => dispatch(fetchSwornMembers(array))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
