import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = (props) => {
  //type props should recieve either primary, secondary button
  const { onClick, text, icon, type, path, design } = props;

  return (
    <button
      onClick={onClick}
      type={type}
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
