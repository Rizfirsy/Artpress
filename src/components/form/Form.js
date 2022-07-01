import TextInput from "../input/TextInput";
import Button from "../button/Button";
import styles from "./Form.module.css";

const Form = () => {
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log("form was submitted");
  };

  return (
    <form onSubmit={submitFormHandler} className={styles.form}>
      <div className={styles.inputContainer}>
        <label className={styles.label} for="email">
          Email address
        </label>
        <TextInput
          inputDesign="outlined"
          inputType="email"
          inputId="email"
          inputMinLength="4"
          inputPlaceholder="name@email.com"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label} for="password">
          Password
        </label>
        <TextInput
          inputDesign="outlined"
          inputType="password"
          inputId="password"
          inputMinLength="8"
          inputPlaceholder="••••••••"
          required
        />
      </div>
      <Button
        onClick={submitFormHandler}
        type="submit"
        design="primary"
        text="Login"
      />
    </form>
  );
};

export default Form;
