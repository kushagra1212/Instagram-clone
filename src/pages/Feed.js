import Header from "../components/header/Header";
import Post from "../components/post/Post";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Feed.module.css";
import { addLike } from "../redux/actions/likesAction";
import { storePosts } from "../utils/localstorage.js";
const Feed = () => {
  const { posts } = useSelector((state) => state.postReducer);
  const { allComments } = useSelector((state) => state.commentsReducer);

  const dispatch = useDispatch();
  const likesHandler = (code) => {
    dispatch(addLike(code));
    storePosts(code);
  };
  return (
    <div className={styles.feed}>
      <Header />
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Post
            comments={allComments[post.code]}
            likesHandler={likesHandler}
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
