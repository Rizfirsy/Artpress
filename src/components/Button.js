import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.button}>
      {props.text}
      <span>{props.icon}</span>
    </button>
  );
};

export default Button;
