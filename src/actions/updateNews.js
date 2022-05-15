import { ADD_NEWS, REMOVE_NEWS } from '../constants'; 

export const addNews = (payload) => ({type: ADD_NEWS, payload});
export const removeNews = (payload) => ({type: REMOVE_NEWS, payload});