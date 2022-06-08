import gsap from "gsap";
import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

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

  return (
    <ul className={`navbar-menu-gsap ${styles["navbar-menu"]}`}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
      <li>
        <NavLink to="/products">Products</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/support">Support</NavLink>
      </li>
    </ul>
  );
};

export default Menu;
