import Header from "../components/header/Header";
import Post from "../components/post/Post";
import styles from "./Feed.module.css";
import posts from "../utils/data/posts.js";
const Feed = () => {
  return (
    <div className={styles.feed}>
      <Header />
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
