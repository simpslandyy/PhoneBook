const R = require('ramda');
const initialState = {}

export const phoneBook = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH':
      return state;
    case 'ADD':
      return state;
    case 'UPDATE':
      return state;
    case 'DELETE':
      return state;
    default:
      return state;
  }
}
