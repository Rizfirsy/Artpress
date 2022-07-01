import Menu from "./nav-menu/NavMenu";
import Logo from "../Logo";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header>
      <nav className={`nav ${styles.nav}`}>
        <Logo />
        <div className={`menu ${styles["menu"]}`}>
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
