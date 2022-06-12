import styles from "./FilterSection.module.css";
import Button from "../../components/Button";

const FilterSection = (props) => {
  return (
    <section className={styles.asideSection}>
      <h4 className={styles.sectionName}>{props.title}</h4>
      <div className={styles.filterContent}>
        <div>
          <input id="svg" type="checkbox" />
          <label for="svg">.svg</label>
        </div>
        <div>
          <input id="eps" type="checkbox" />
          <label for="eps">.eps</label>
        </div>
        <div>
          <input id="jpg" type="checkbox" />
          <label for="jpg">.jpg</label>
        </div>
        <div>
          <input id="png" type="checkbox" />
          <label for="png">.png</label>
        </div>
        <Button design="tertiary" text="Reset" />
      </div>
    </section>
  );
};

export default FilterSection;
