import styles from "./Login.module.css";
import Form from "../../components/form/Form";
import image from "../../images/login-wallpaper.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.login}>
      <section className={styles.formSection}>
        <h1>Login</h1>
        <p>Enter your credential to acccess your account</p>
        <Form />
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
      <section className={styles.formImage}>
        <img src={image} alt="login-wallpaper" width="100%" />
      </section>
    </div>
  );
};

export default Login;
