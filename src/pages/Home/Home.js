import styles from "./Home.module.css";
import Hero from "../../sections/home-section/Hero/Hero";
import Promo from "../../sections/home-section/Promo/Promo";
import Categories from "../../sections/home-section/Categories/Categories";
import Artist from "../../sections/home-section/Artist/Artist";
import CanvasPromo from "../../sections/home-section/Promo/CanvasPromo";
import Reviews from "../../sections/home-section/Reviews/Reviews";
import Subscribe from "../../sections/home-section/Subscribe/Subscribe";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Promo color="dark" />
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
