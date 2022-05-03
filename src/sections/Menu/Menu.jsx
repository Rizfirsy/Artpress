import gsap from "gsap";
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
      <li>My Profile</li>
      <li>Products</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
  );
};

export default Menu;
