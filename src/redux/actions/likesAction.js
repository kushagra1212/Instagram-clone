export const ADD_LIKE = "ADD_LIKE";
export const UPDATE_POSTS = "UPDATE_POSTS";

export const addLike = (code) => {
  return {
    type: ADD_LIKE,
    payload: { code: code },
  };
};
export const updatePosts = (posts) => {
  return {
    type: UPDATE_POSTS,
    payload: { posts },
  };
};
