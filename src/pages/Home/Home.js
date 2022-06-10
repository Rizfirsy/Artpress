import { Fragment } from "react";
import styles from "./Home.module.css";
import Hero from "../../sections/Hero/Hero";
import Promo from "../../sections/Promo/Promo";
import Products from "../../sections/Products/Products";
import Categories from "../../sections/Categories/Categories";
import Artist from "../../sections/Artist/Artist";
import CanvasPromo from "../../sections/Promo/CanvasPromo";
import Reviews from "../../sections/Reviews/Reviews";
import Subscribe from "../../sections/Subscribe/Subscribe";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Promo color="dark" />
      <Products />
      <Categories />
      <Artist />
      <CanvasPromo />
      <Reviews />
      <Promo color="light" />
      <Subscribe />
    </div>
  );
};

export default Home;
