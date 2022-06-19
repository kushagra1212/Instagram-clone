import Header from "../components/header/Header";
import styles from "./Comments.module.css";
import Post from "../components/post/Post";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Comment from "../components/comment/Comment";
import { useEffect, useRef, useState } from "react";
import { addLike } from "../redux/actions/likesAction";
import { useLocation } from "react-router-dom";
import { addComment } from "../redux/actions/commentsAction";
import { LinearLoader } from "../ui-components/Loader";
import { storeComments, storePosts } from "../utils/localstorage.js";
const Comments = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState({ user: "", text: "" });
  const [loading, setLoading] = useState(true);
  const [isUnmounted, setIsUnmounted] = useState(false);
  const postRef = useRef();
  const lastCommentRef = useRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postReducer);
  const { allComments } = useSelector((state) => state.commentsReducer);

  const submitHandler = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    storeComments(post.code, [...comments, comment]);
    setComment({ user: "", text: "" });
    dispatch(addComment(post.code, comment));
    lastCommentRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const likesHandler = (code) => {
    dispatch(addLike(code));
    storePosts(code);
  };
  const populateCard = (code) => {
    let index = posts.findIndex((p) => p.code === code);
    setPost(posts[index]);
    if (allComments[code] && allComments[code]?.length >= 0)
      setComments(allComments[code]);
    setLoading(false);
  };
  useEffect(() => {
    if (!isUnmounted) {
      populateCard(location.state.code);
      postRef?.current?.scrollIntoView();
    }

    return () => setIsUnmounted(true);
  }, []);
  if (loading) {
    return <LinearLoader />;
  }
  return (
    <div ref={postRef}>
      <Header />
      <div className={styles.card}>
        <div className={styles.postDiv}>
          <Post
            likesHandler={likesHandler}
            comments={comments}
            post={post}
            large={true}
          />
        </div>
        <div className={styles.commentBox}>
          <div className={styles.comments}>
            {comments.length > 0 ? (
              comments?.map((comment, id) => (
                <Comment key={id} comment={comment} />
              ))
            ) : (
              <h3 style={{ opacity: "0.2", textAlign: "center" }}>
                No Comments Yet!
              </h3>
            )}
            <div ref={lastCommentRef} style={{ margin: 0, marginTop: "2em" }} />
          </div>
          <form onSubmit={submitHandler} className={styles.commentForm}>
            <input
              required
              className={styles.author}
              type="text"
              placeholder="Author"
              value={comment.user}
              onChange={(e) => setComment({ ...comment, user: e.target.value })}
            />
            <input
              required
              className={styles.text}
              type="text"
              placeholder="Comment"
              value={comment.text}
              onChange={(e) => setComment({ ...comment, text: e.target.value })}
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
