import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserProfile from "./pages/Profile/UserProfile";
import Footer from "./sections/Footer/Footer";
import Navbar from "./sections/Navbar/Navbar";
import styles from "./App.module.css";
import Store from "./pages/Store/Store";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main>
        <Switch>
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
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
