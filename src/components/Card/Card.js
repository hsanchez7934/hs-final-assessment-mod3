import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ person, fetchSwornMembers }) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers } = person;
  return (
    <article
      className='card'
      onClick={() => fetchSwornMembers(swornMembers)}>
      <ul>
        <li>{name}</li>
        <li>{founded}</li>
        <li>{seats}</li>
        <li>{titles}</li>
        <li>{coatOfArms}</li>
        <li>{ancestralWeapons}</li>
        <li>{words}</li>
      </ul>
    </article>
  );
};


Card.propTypes = {
  person: PropTypes.object
};

export default Card;
