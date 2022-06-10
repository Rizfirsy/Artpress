import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/Profile/UserProfile";
import Navbar from "./sections/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/my-profile">
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
