import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Post.module.css";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Post = ({ post, large = false, likesHandler, comments }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const commentsHandler = () => {
    navigate("/comments", {
      state: { code: post.code },
    });
  };
  useEffect(() => {
    let timer;
    if (liked) {
      timer = setTimeout(() => {
        setLiked(false);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [liked]);
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
      <div
        onClick={large ? null : commentsHandler}
        className={styles.upperHalf}
      >
        {liked ? (
          <div className={styles.likedDiv}>
            <div className={styles.heart}>
              <img
                alt="heart"
                wdith="100%"
                height="100%"
                src={process.env.PUBLIC_URL + "whiteheart.png"}
              />
              <h1
                style={{ position: "absolute", fontSize: "2em", color: "blue" }}
              >
                {post.likes}
              </h1>
            </div>
          </div>
        ) : null}
        <LazyLoadImage
          alt="Post"
          effect="blur"
          width="100%"
          height="auto"
          src={post.display_src}
        />
      </div>
      <div className={styles.lowerHalf}>
        <p style={{ textAlign: "center" }}>{post.caption}</p>
        <div className={styles.buttonsDiv}>
          <button
            onClick={() => {
              setLiked(true);
              likesHandler(post.code);
            }}
          >
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
            <span>💬</span>&nbsp;
            {comments ? comments.length : 0}
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
