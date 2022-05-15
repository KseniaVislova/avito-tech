import { addNews } from "../actions/updateNews";
import { URL, NEWSTORIES, LIMIT, ITEM, END_URL } from "../constants";

export const fetchNews = () => {
  return dispatch => {
    fetch(URL + NEWSTORIES + LIMIT)
      .then(response => response.json())
      .then(json => json.map(item => {
        fetch(ITEM + item + END_URL)
        .then(response => response.json())
        .then(json => dispatch(addNews(json)))
      }))
  }
}