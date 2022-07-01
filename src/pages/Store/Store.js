import styles from "./Store.module.css";
import Products from "../../sections/home-section/Products/Products";
import Button from "../../components/button/Button";
import FilterSection from "../../components/filter/FilterSection";

const Store = () => {
  return (
    <div className={styles.storePage}>
      <div className={styles.slider} />
      <div className={styles.productsWrapper}>
        <div className={styles.filterWrapper}>
          <aside className={styles.filter}>
            <FilterSection
              filterName="Price Range"
              filterContent={
                <>
                  <div>
                    <input id="20" type="checkbox" />
                    <label for="20"> $5 - $20</label>
                  </div>
                  <div>
                    <input id="50" type="checkbox" />
                    <label for="50"> $21 - $50</label>
                  </div>
                  <div>
                    <input id="70" type="checkbox" />
                    <label for="70"> $51 - $70</label>
                  </div>
                  <Button design="tertiary" text="Reset" />
                </>
              }
            />
            <FilterSection
              filterName="Software Types"
              filterContent={
                <>
                  <div>
                    <input id="Illustrator" type="checkbox" />
                    <label for="Illustrator"> Adobe Illustrator</label>
                  </div>
                  <div>
                    <input id="Photoshop" type="checkbox" />
                    <label for="Photoshop"> Adobe Photoshop</label>
                  </div>
                  <div>
                    <input id="Affinity" type="checkbox" />
                    <label for="Affinity"> Affinity Designer</label>
                  </div>
                  <div>
                    <input id="coreldraw" type="checkbox" />
                    <label for="coreldraw"> Corel Draw</label>
                  </div>
                  <div>
                    <input id="Blender" type="checkbox" />
                    <label for="Blender"> Blender 3D</label>
                  </div>
                  <Button design="tertiary" text="Reset" />
                </>
              }
            />
            <FilterSection
              filterName="File Format"
              filterContent={
                <>
                  <div>
                    <input id="svg" type="checkbox" />
                    <label for="svg"> .svg</label>
                  </div>
                  <div>
                    <input id="eps" type="checkbox" />
                    <label for="eps"> .eps</label>
                  </div>
                  <div>
                    <input id="jpg" type="checkbox" />
                    <label for="jpg"> .jpg</label>
                  </div>
                  <div>
                    <input id="png" type="checkbox" />
                    <label for="png"> .png</label>
                  </div>
                  <Button design="tertiary" text="Reset" />
                </>
              }
            />
            <section className={styles.filterBar}>
              <Button design="tertiary" text="Reset All" />
              <Button design="primary" text="Apply All" />
            </section>
          </aside>
        </div>
        <main className={styles.mainSection}>
          <Products />
        </main>
      </div>
    </div>
  );
};

export default Store;
