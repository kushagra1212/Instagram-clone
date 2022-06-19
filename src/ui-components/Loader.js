import styles from "./Loader.module.css";
export const LinearLoader = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}></div>
    </div>
  );
};
