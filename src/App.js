import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import "./App.css";
import { updateComments } from "./redux/actions/commentsAction";
import { updatePosts } from "./redux/actions/likesAction";
import Routes from "./routes/Routes";
import comments from "./utils/data/comments";
import posts from "./utils/data/posts";
import {
  getDataFromLocalStorage,
  storeDataToLocalStorage,
} from "./utils/localstorage.js";
function App() {
  const dispatch = useDispatch();
  const initialLzer = () => {
    let data = getDataFromLocalStorage();
    if (data) {
      dispatch(updatePosts(data.posts));
      dispatch(updateComments(data.comments));
    } else {
      storeDataToLocalStorage({ posts: posts, comments: comments });
    }
  };
  useEffect(() => {
    initialLzer();
  }, []);

  return <Routes />;
}

export default App;
