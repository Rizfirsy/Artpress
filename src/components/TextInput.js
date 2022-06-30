import styles from "./TextInput.module.css";
import useInputValidation from "../custom-hook/useInputValidation";
import { useState } from "react";

const TextInput = (props) => {
  const [value, setValue] = useState("");

  //destructuring props
  const {
    inputDesign,
    inputType,
    inputPlaceholder,
    inputId,
    inputMinLength,
    inputMaxLength,
  } = props;

  //validation result
  const [isValid, message] = useInputValidation(inputType, value);

  //styling the input based on validity
  const validStyling = isValid ? "validInput" : "invalidInput";

  //handling the input when it's value was changed
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        onChange={onChangeHandler}
        className={`${styles[validStyling]} ${styles[inputDesign]} ${styles.input}`}
        placeholder={inputPlaceholder}
        type={inputType}
        id={inputId}
        minLength={inputMinLength}
        maxLength={inputMaxLength}
      />
      {/* {!isValid && <p>{message}</p>} */}
    </div>
  );
};

export default TextInput;
