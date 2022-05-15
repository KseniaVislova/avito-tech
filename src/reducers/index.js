import {combineReducers} from 'redux';
import { updateNews } from './updateNews';

const rootReducer = combineReducers({
  news: updateNews,
});

export default rootReducer;