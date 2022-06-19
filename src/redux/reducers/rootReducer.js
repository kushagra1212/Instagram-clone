import { combineReducers } from "redux";
import postReducer from "./postReducer";
import commentsReducer from "./commentsReducer";
const rootReducer = combineReducers({ postReducer, commentsReducer });

export default rootReducer;
