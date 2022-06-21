import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Menu from "../Menu/Menu";
import Logo from "../../components/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
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

export default Navbar;
