import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.button}>
      {props.text}
      {props.icon}
    </button>
  );
};

export default Button;
