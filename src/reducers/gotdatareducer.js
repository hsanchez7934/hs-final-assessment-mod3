export const gotData = (state=[], action) => {
  switch (action.type) {
  case 'GET_GOT_DATA':
    return action.array;
  default:
    return state;
  }
};
