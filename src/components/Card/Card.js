import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';


const Card = ({ person, fetchSwornMembers, swornMembersArray }) => {
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
        <div>
          {
            swornMembersArray.map( (person, index) => {
              const { name, alive } = person;
              return (
                <ul key={index}>
                  <li>{name}</li>
                  <li>{alive}</li>
                </ul>
              );
            })
          }
        </div>
      </ul>
    </article>
  );
};


Card.propTypes = {
  person: PropTypes.object,
  fetchSwornMembers: PropTypes.func
};

export default Card;
