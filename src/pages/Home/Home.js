import { Fragment } from "react";
import Header from "../../sections/Header/Header";
import Promo from "../../sections/Promo/Promo";
import Products from "../../sections/Products/Products.jsx";
import Categories from "../../sections/Categories/Categories";
import Artist from "../../sections/Artist/Artist";
import CanvasPromo from "../../sections/Promo/CanvasPromo";
import Reviews from "../../sections/Reviews/Reviews";
import Subscribe from "../../sections/Subscribe/Subscribe";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Promo color="dark" />
      <Products />
      <Categories />
      <Artist />
      <CanvasPromo />
      <Reviews />
      <Promo color="light" />
      <Subscribe />
    </Fragment>
  );
};

export default Home;
