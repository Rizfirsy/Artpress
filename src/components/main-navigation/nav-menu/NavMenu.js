import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";
import Button from "../../button/Button";

const Menu = (props) => {
  return (
    <ul className={`navbar-menu-gsap ${styles["navbar-menu"]}`}>
      <li>
        <NavLink
          activeClassName={styles.active}
          className={styles.pageNavigation}
          to="/home"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.active}
          className={styles.pageNavigation}
          to="/store"
        >
          Store
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName={styles.active}
          className={styles.pageNavigation}
          to="/hire-artists"
        >
          Hire Artists
        </NavLink>
      </li>
      <Button design="primary" text="Login" path="/login" />
    </ul>
  );
};

export default Menu;
