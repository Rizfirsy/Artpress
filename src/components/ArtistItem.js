import styles from "./ArtistItem.module.css";
import Button from "../components/Button";
import image_1 from "../images/1.png";
import image_2 from "../images/2.png";
import image_3 from "../images/3.png";
import image_4 from "../images/4.png";
import profile from "../images/profile.jpg";

const ArtistItem = () => {
  return (
    <li className={styles.artistItem}>
      <div className={styles.artist}>
        <div className={styles.artistDetail}>
          <img src={profile} alt="artist-avatar" width={100} />
          <div>
            <h1 className={styles.artistName}>Rizky Firmansyah</h1>
            <p className={styles.artistLocation}>
              Jakarta, ID. <span className={styles.artistPrice}>$20/hour</span>
            </p>
          </div>
        </div>
        <Button text="contact" design="secondary" />
      </div>
      <div className={styles.artistPortfolio}>
        <img src={image_1} alt="portfolio" />
        <img src={image_2} alt="portfolio" />
        <img src={image_3} alt="portfolio" />
        <img src={image_4} alt="portfolio" />
        <img src={image_1} alt="portfolio" />
      </div>
    </li>
  );
};

export default ArtistItem;
