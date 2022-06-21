import styles from "./FilterSection.module.css";

const FilterSection = (props) => {
  const { filterName, filterContent } = props;

  return (
    <section className={styles.asideSection}>
      <h4 className={styles.filterName}>{filterName}</h4>
      <div className={styles.filterContent}>{filterContent}</div>
    </section>
  );
};

export default FilterSection;
