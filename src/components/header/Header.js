import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <img
        alt=""
        src={process.env.PUBLIC_URL + "/instagram-logo.png"}
        width="25%"
        height="auto"
      />
    </div>
  );
};

export default Header;
