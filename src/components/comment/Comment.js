import styles from "./Comment.module.css";
const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <label className={styles.user}>{comment.user}</label>
      <label className={styles.text}>{comment.text}</label>
    </div>
  );
};

export default Comment;
