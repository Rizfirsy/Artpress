import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props) => {
  //type props should recieve either primary, secondary button
  const { text, icon, type, path, design } = props;

  //prevent button's default behavior
  const buttonClickHandler = (e) => {
    e.preventDefault();
  };

  return (
    <button
      type={type}
      onClick={buttonClickHandler}
      className={`${styles.button} ${styles[design]}`}
    >
      <Link className={styles.buttonLink} to={path}>
        {text}
      </Link>
      {icon}
    </button>
  );
};

export default Button;
