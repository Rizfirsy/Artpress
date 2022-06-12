import { useState } from "react";
import gsap from "gsap";
import styles from "./HireArtists.module.css";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

const HireArtists = () => {
  const [isActive, setActive] = useState(false);

  const accordionHandler = () => {
    setActive(!isActive);
  };

  if (isActive) {
    gsap.to(".panel", {
      display: "block",
      height: "fit-content",
      delay: 0,
      padding: "1rem",
    });
  } else {
    gsap.to(".panel", {
      display: "none",
      height: 0,
      delay: 0,
      padding: 0,
    });
  }

  return (
    <div className={styles.HireArtistsPage}>
      <div className={styles.pageWrapper}>
        <aside className={styles.HireArtistsNavigation}>
          <div>
            <h1>Type of artist</h1>
            <nav>
              <button onClick={accordionHandler} className={styles.accordion}>
                Freelancer
              </button>
              <div className={`panel ${styles.panel}`}>
                <ul>
                  <li>
                    <p>Part-time</p>
                  </li>
                  <li>
                    <p>Full-time</p>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>
        <main className={styles.HireArtistsContent}>
          <div>main content here</div>
        </main>
        <aside className={styles.HireArtistsFilter}>
          <div>
            <section className={styles.asideSection}>
              <h4 className={styles.sectionName}>Specialties</h4>
              <div className={styles.filterContent}>
                <div>
                  <TextInput
                    inputDesign="outlined"
                    inputType="text"
                    inputPlaceholder="Search specialties..."
                    inputId="specialties"
                    inputMinLength="4"
                  />
                </div>

                <Button design="tertiary" text="Reset" />
              </div>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HireArtists;
