import Header from "../components/header/Header";
import { useLocation } from "react-router-dom";
import styles from "./Comments.module.css";
import Post from "../components/post/Post";
import Comment from "../components/comment/Comment";
import { useEffect, useRef } from "react";
const Comments = () => {
  const postRef = useRef();
  const location = useLocation();
  const { post, postComments } = location.state;
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    postRef.current.scrollIntoView();
  }, []);
  return (
    <div ref={postRef}>
      <Header />
      <div className={styles.card}>
        <div className={styles.postDiv}>
          <Post post={post} large={true} />
        </div>
        <div className={styles.commentBox}>
          <div className={styles.comments}>
            {postComments?.map((comment, id) => (
              <Comment key={id} comment={comment} />
            ))}
          </div>
          <form onSubmit={submitHandler} className={styles.commentForm}>
            <input
              required
              className={styles.author}
              type="text"
              placeholder="Author"
            />
            <input
              required
              className={styles.text}
              type="text"
              placeholder="Comment"
            />
            <button className={styles.submitButton} type="submit">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
