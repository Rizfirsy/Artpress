import gsap from "gsap";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";
import Button from "../../components/Button";

const Menu = (props) => {
  if (props.state === true) {
    gsap.to(".navbar-menu-gsap", {
      duration: 0.15,
      right: 0,
    });
  } else {
    gsap.to(".navbar-menu-gsap", {
      duration: 0.15,
      right: "-100%",
    });
  }

  const menuOnClickHandler = () => {
    gsap.to(".navbar-menu-gsap", {
      duration: 0.15,
      right: "-100%",
    });
  };

  return (
    <ul className={`navbar-menu-gsap ${styles["navbar-menu"]}`}>
      <li>
        <NavLink
          onClick={menuOnClickHandler}
          activeClassName={styles.active}
          className={styles.pageNavigation}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          onClick={menuOnClickHandler}
          activeClassName={styles.active}
          className={styles.pageNavigation}
          to="/my-profile"
        >
          My Profile
        </NavLink>
      </li> */}
      <li>
        <NavLink
          onClick={menuOnClickHandler}
          activeClassName={styles.active}
          className={styles.pageNavigation}
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={menuOnClickHandler}
          activeClassName={styles.active}
          className={styles.pageNavigation}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={menuOnClickHandler}
          activeClassName={styles.active}
          className={styles.pageNavigation}
          to="/support"
        >
          Support
        </NavLink>
      </li>

      <Button design="primary" text="Login" path="/login" />
    </ul>
  );
};

export default Menu;
