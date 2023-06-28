import styles from "../styles/button.module.css";

const Button = ({ onClick, children }) => {
  return (
    <button className={`${styles.button} ${styles.press}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
