export const ADD_COMMENT = "ADD_COMMENT";
export const UPDATE_COMMENTS = "UPDATE_COMMENTS";

export const addComment = (code, comment) => {
  return {
    type: ADD_COMMENT,
    payload: { code: code, comment: comment },
  };
};
export const updateComments = (comments) => {
  return {
    type: UPDATE_COMMENTS,
    payload: { comments },
  };
};
