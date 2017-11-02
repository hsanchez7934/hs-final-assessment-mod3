import React, { Component } from 'react';

const Card = ({ person }) => {
  const { name, founded, seats, titles, coatOfArms, ancestralWeapons, words } = person;
  return (
    <article>
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
}
