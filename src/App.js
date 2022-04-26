import Artist from "./sections/Artist/Artist";
import Categories from "./sections/Categories/Categories";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import Products from "./sections/Products/Products";
import CanvasPromo from "./sections/Promo/CanvasPromo";
import Promo from "./sections/Promo/Promo";
import Reviews from "./sections/Reviews/Reviews";
import Subscribe from "./sections/Subscribe/Subscribe";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo color="dark" />
      <Products />
      <Categories />
      <Artist />
      <CanvasPromo />
      <Reviews />
      <Promo color="light" />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
