import styles from "./Button.module.css";

const Button = ({ onClick, text, icon, type, path, design }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styles[design]}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
