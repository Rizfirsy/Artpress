import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/Profile/UserProfile";
import Footer from "./sections/Footer/Footer";
import MainNavigation from "./components/main-navigation/MainNavigation";
import styles from "./App.module.css";
import Store from "./pages/Store/Store";
import HireArtists from "./pages/HireArtists/HireArtists";

function App() {
  return (
    <div className={styles.appLayout}>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/my-profile">
            <UserProfile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/hire-artists">
            <HireArtists />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
