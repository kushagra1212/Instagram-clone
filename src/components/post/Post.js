import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import comments from "../../utils/data/comments";
import styles from "./Post.module.css";
const Post = ({ post, large = false }) => {
  const [postComments, setPostComments] = useState([]);
  const [isUnmounted, setIsUnmounter] = useState(false);
  const navigate = useNavigate();
  const getCommentsHandler = () => {
    setPostComments(comments[post.code]);
  };
  const commentsHandler = () => {
    navigate("/comments", {
      state: { post, postComments },
    });
  };
  useEffect(() => {
    if (!isUnmounted) {
      getCommentsHandler();
    }
    return () => setIsUnmounter(true);
  }, []);
  return (
    <div
      className={styles.post}
      style={
        large
          ? {
              margin: "0px",
              border: "0px",
              minHeight: "0px",
              width: "100%",
            }
          : {}
      }
    >
      <div className={styles.upperHalf}>
        <img
          src={post.display_src}
          alt="Post thumbnail"
          width="100%"
          height="auto"
        />
      </div>
      <div className={styles.lowerHalf}>
        <p style={{ textAlign: "center" }}>{post.caption}</p>
        <div className={styles.buttonsDiv}>
          <button>
            <span>💙</span>&nbsp;<span>{post.likes}</span>
          </button>
          <button
            disabled={large}
            style={
              large
                ? {
                    pointerEvents: "none",
                  }
                : {}
            }
            onClick={commentsHandler}
          >
            <span>💬</span>&nbsp;{postComments ? postComments.length : 0}
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
