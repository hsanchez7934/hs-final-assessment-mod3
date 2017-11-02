export const swornMembers = (state = [], action) => {
  switch (action.type) {
  case 'GET_SWORN_MEMBERS':
    return action.array;
  default:
    return state;
  }
};
