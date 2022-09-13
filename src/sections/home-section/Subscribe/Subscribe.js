import SusbcribeForm from "../../../components/form/SubscribeForm";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <h4>Receive deals every week, no spam</h4>
      <h2>Subscribe the newsletter and save 20% on your first order!</h2>
      <SusbcribeForm />
    </section>
  );
};

export default Subscribe;
