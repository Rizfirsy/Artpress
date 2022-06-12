import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <h4>Receive deals every week, no spam</h4>
      <h2>Subscribe the newsletter and save 20% on your first order!</h2>
      <form>
        <TextInput
          inputMinLength="4"
          inputType="text"
          inputPlaceholder="Write your email here"
        />
        <Button
          type="submit"
          design="primary"
          className={styles["submit-subscribtion"]}
          text="Subscribe"
        />
      </form>
    </section>
  );
};

export default Subscribe;
