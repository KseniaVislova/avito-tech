import { ADD_NEWS, REMOVE_NEWS, SELECT_NEWS } from '../constants';

const defaultState = {
  items: [],
  selectNews: null
}

export const updateNews = (state = defaultState, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_NEWS:
      return {...state, items: [...state.items, action.payload]};
    case REMOVE_NEWS:
      return {...state, items: []};
    case SELECT_NEWS:
      return {...state, selectNews: action.payload};
    default:
    return {...state};
  }
}