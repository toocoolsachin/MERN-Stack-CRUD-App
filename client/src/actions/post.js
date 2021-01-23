import {
  GET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  POST_ERROR,
} from './types';
import axios from 'axios';
import api from '../constants/api';

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/posts`);

    dispatch({
      type: GET_POSTS,
      payload: res.data.result,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
  }
};

export const addPost = (formData) => async (dispatch) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };

    const res = await axios.post(`${api}/posts`, formData, { headers });

    dispatch({
      type: ADD_POST,
      payload: res.data.result,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
  }
};
