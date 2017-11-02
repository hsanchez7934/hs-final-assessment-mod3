export const gotData = array => ({
  type: 'GET_GOT_DATA',
  array
});

export const swornMembers = array => ({
  type: 'GET_SWORN_MEMBERS',
  array
});

export const fetchGotData = () => dispatch => {
  fetch(` http://localhost:3001/api/v1/houses`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(res => {
      res.forEach( person => {
      const membersArr = person.swornMembers.forEach( endpoint =>{
      fetch(`http://www.localhost:3001/api/v1/character`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: endpoint})
      })
        .then(response => response.json())
        .then(res => dispatch(swornMembers(res)));
    });
    dispatch(gotData(res));
    } );
  })
}
