import posts from "../../utils/data/posts";
import { ADD_LIKE, UPDATE_POSTS } from "../actions/likesAction";
const postReducer = (state = { posts: posts }, action) => {
  switch (action.type) {
    case ADD_LIKE:
      let currentPosts = state.posts;
      let index = currentPosts.findIndex(
        (ele) => ele.code === action.payload.code
      );
      if (index >= 0) currentPosts[index].likes++;
      return { ...state, posts: currentPosts };
    case UPDATE_POSTS:
      return { ...state, posts: action.payload.posts };
    default:
      return state;
  }
};

export default postReducer;
