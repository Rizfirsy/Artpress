import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import UserProfile from "./pages/Profile/UserProfile";
import Navbar from "./sections/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
