import {
  GET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  POST_ERROR,
} from '../actions/types';

const initialState = {
  posts: [],
  postError: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        postError: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        postError: false,
      };
    case POST_ERROR:
      return {
        ...state,
        postError: true,
      };
    default:
      return state;
  }
}
