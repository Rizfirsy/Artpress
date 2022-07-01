import styles from "./HireArtists.module.css";
import FilterSection from "../../components/filter/FilterSection";
import ArtistItem from "../../components/ArtistItem";
import Button from "../../components/button/Button";

const HireArtists = () => {
  return (
    <div className={styles.HireArtistsPage}>
      <div className={styles.pageWrapper}>
        <div className={styles.filterWrapper}>
          <aside className={styles.filter}>
            <FilterSection
              filterName="Artist Type"
              filterContent={
                <>
                  <div>
                    <input id="part-time" type="checkbox" />
                    <label for="part-time"> Part-time Freelancer</label>
                  </div>
                  <div>
                    <input id="full-time" type="checkbox" />
                    <label for="full-time"> Full-time Freelancer</label>
                  </div>
                  <Button design="tertiary" text="Reset" />
                </>
              }
            />
          </aside>
        </div>
        <main className={styles.mainContent}>
          <ul>
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
            <ArtistItem />
          </ul>
        </main>
      </div>
    </div>
  );
};

export default HireArtists;
