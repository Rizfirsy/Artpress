import styles from "./TextInput.module.css";

const textInput = (props) => {
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

export default textInput;
