import styles from "./Product.module.css";

const Product = (props) => {
  const { src, alt, title, price } = { ...props.details };
  return (
    <div className={styles.product}>
      <img src={src} alt={alt} />
      <h4>{title}</h4>
      <p>USD ${price}</p>
    </div>
  );
};

export default Product;
