import { useState, useEffect } from "react";
import gsap from "gsap";
import Menu from "../Menu/Menu";
import Logo from "../../components/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  }, [scrollPosition]);

  const openMenuHandler = () => {
    setMenuState(!menuState);
  };

  if (menuState === true) {
    gsap.to(".menu", {
      color: "#fff",
    });

    gsap.to(".circle", {
      fill: "white",
    });

    gsap.to(".circle2", {
      duration: 0.15,
      cx: 16.4999,
      cy: 16.4999,
    });

    gsap.to(".circle4", {
      duration: 0.15,
      cx: 16.4999,
      cy: 16.4999,
    });

    gsap.to(".circle6", {
      duration: 0.15,
      cx: 16.4999,
      cy: 16.4999,
    });

    gsap.to(".circle8", {
      duration: 0.15,
      cx: 16.4999,
      cy: 16.4999,
    });
  } else {
    gsap.to(".menu", {
      color: "#08081A",
    });

    gsap.to(".circle", {
      fill: "#08081A",
    });

    gsap.to(".circle2", {
      duration: 0.15,
      cx: 6.55263,
      cy: 16.4999,
      fill: "#08081A",
    });

    gsap.to(".circle4", {
      duration: 0.15,
      cx: 16.4999,
      cy: 6.55263,
    });

    gsap.to(".circle6", {
      duration: 0.15,
      cx: 16.4999,
      cy: 26.4474,
    });

    gsap.to(".circle8", {
      duration: 0.15,
      cx: 26.4472,
      cy: 16.4999,
    });
  }

  return (
    <nav className={`nav ${styles.nav}`}>
      <Logo state={menuState} />
      <div className={`menu ${styles["menu"]}`}>
        <div className={`cart-gsap ${styles.cart}`}>
          Cart (
          <span className={`cart-amount ${styles["cart-amount"]}`}>0</span>)
        </div>
        <div className={styles["menu-btn"]} onClick={openMenuHandler}>
          Menu
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="circle circle1"
              cx="6.55263"
              cy="6.55263"
              r="3.55263"
              fill="#08081A"
            />
            <circle
              className="circle circle2"
              cx="6.55263"
              cy="16.4999"
              r="3.55263"
              fill="#08081A"
            />
            <circle
              className="circle circle3"
              cx="6.55263"
              cy="26.4474"
              r="3.55263"
              fill="#08081A"
            />
            <circle
              className="circle circle4"
              cx="16.4999"
              cy="6.55263"
              r="3.55263"
              fill="#08081A"
            />
            <circle
              className="circle circle5"
              cx="16.4999"
              cy="16.4999"
              r="3.55263"
              fill="#08081A"
            />
            <circle
              className="circle circle6"
              cx="16.4999"
              cy="26.4474"
              r="3.55263"
              fill="#08081A"
            />
            <circle
              className="circle circle7"
              cx="26.4472"
              cy="6.55263"
              r="3.55263"
              fill="#08081A"
            />
            <circle
              className="circle circle8"
              cx="26.4472"
              cy="16.4999"
              r="3.55263"
              fill="#08081A"
            />
            <circle
              className="circle circle9"
              cx="26.4472"
              cy="26.4474"
              r="3.55263"
              fill="#08081A"
            />
          </svg>
        </div>
        <Menu state={menuState} />
      </div>
    </nav>
  );
};

export default Navbar;
