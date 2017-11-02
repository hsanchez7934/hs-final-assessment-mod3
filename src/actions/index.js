export const gotData = array => ({
  type: 'GET_GOT_DATA',
  array
});

export const swornMembers = object => ({
  type: 'GET_SWORN_MEMBERS',
  object
});

export const fetchGotData = () => dispatch => {
  fetch(` http://localhost:3001/api/v1/houses`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(array => {
      const dataArray = array.map( house => {
        return Object.assign({
          name: house.name,
          founded: house.founded,
          seats: house.seats,
          titles: house.titles,
          coatOfArms: house.coatOfArms,
          ancestralWeapons: house.ancestralWeapons,
          words: house.words,
          swornMembers: house.swornMembers
        });
      });
      dispatch(gotData(dataArray));
    });
};

export const fetchSwornMembers = array => dispatch => {
    array.map( endpoint => {
    fetch(`http://localhost:3001/api/v1/character`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({ url: endpoint })
      })
      .then(response => response.json())
      .then(response => {
        let object = Object.assign({
          name: response.name,
          alive: response.died || 'alive'
        })
        dispatch(swornMembers(object));
      })
    });
}
