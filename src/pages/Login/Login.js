import styles from "./Login.module.css";
import Button from "../../components/Button";
import image from "../../images/login-wallpaper.jpg";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.login}>
      <section className={styles.formSection}>
        <h1>Login</h1>
        <p>Enter your credential to acccess your account</p>
        <form>
          <label for="email">Email address</label>
          <Input
            inputDesign="outlined"
            inputType="email"
            inputId="email"
            inputMinLength="4"
            inputPlaceholder="name@email.com"
            required
          />
          <label for="password">Password</label>
          <Input
            inputDesign="outlined"
            inputType="password"
            inputId="password"
            inputMinLength="8"
            inputPlaceholder="••••••••"
            required
          />

          <Button type="submit" design="primary" text="Login" />
        </form>
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
