import styles from "./Footer.module.css";
import Logo from "../../components/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.about}>
        <ul>
          <h4>About Us</h4>
          <li>Refund and Returns Policy</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className={styles.links}>
        <ul>
          <h4>Quick Links</h4>
          <li>Home</li>
          <li>My account</li>
          <li>Checkout</li>
          <li>Wishlist</li>
        </ul>
      </div>
      <div className={styles.contact}>
        <ul>
          <h4>Contact Us</h4>
          <li>artpress@bordereast.ca</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <div className={styles.policy}>
        <ul>
          <li>
            <a href="#refund">Refund and Returns Policy</a>
          </li>
          <li>
            <a href="#terms">Terms and Conditions</a>
          </li>
          <li>
            <a href="#policy">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className={styles.logo}>
        <Logo color="#000" />
      </div>
      <div className={styles.copyright}>
        <p>© 2022 ArtPress. Made with ♥ and ☕ by Rizfirsy</p>
      </div>
    </footer>
  );
};

export default Footer;
