import comments from "../../utils/data/comments";
import { ADD_COMMENT, UPDATE_COMMENTS } from "../actions/commentsAction";
const commentsReducer = (state = { allComments: comments }, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      let { code, comment } = action.payload;
      let comments = state.allComments[code];
      if (comments) comments = [...comments, comment];
      else comments = [comment];
      state.allComments[code] = comments;
      return state;
    case UPDATE_COMMENTS:
      return { ...state, allComments: action.payload.comments };
    default:
      return state;
  }
};

export default commentsReducer;
