import { ADD_NEWS, REMOVE_NEWS } from '../constants';

const defaultState = {
  items: [],
}

export const updateNews = (state = defaultState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_NEWS:
      return {...state, items: [...state.items, action.payload]};
    case REMOVE_NEWS:
      return {...state, items: []};
    default:
    return {...state};
  }
}