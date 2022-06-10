import styles from "./Input.module.css";

const Input = (props) => {
  const {
    inputDesign,
    inputType,
    inputPlaceholder,
    inputId,
    inputMinLength,
    inputMaxLength,
  } = props;

  return (
    <input
      className={`${styles[inputDesign]} ${styles.input}`}
      placeholder={inputPlaceholder}
      type={inputType}
      id={inputId}
      minLength={inputMinLength}
      maxLength={inputMaxLength}
    />
  );
};

export default Input;
