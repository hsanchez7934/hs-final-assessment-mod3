export const gotData = array => ({
  type: 'GET_GOT_DATA',
  array
});

export const fetchGotData = () => dispatch => {
  fetch(` http://localhost:3001/api/v1/houses`, {
    method: 'GET'
  })
    .then(response => response.json())
    .then(res => dispatch(gotData(res)));
};
