import { useLocation } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import "./App.css";
import Routers from "./routers/Routers";
import Footer from "./components/layout/footer";

function App() {
  const checkActive = () => {
    const { pathname } = useLocation();
    if (pathname === "/contact") {
      return "contactPage";
    } else if (pathname === "/") {
      return "homePage";
    } else if (pathname.includes("/about")) {
      return "about";
    } else if (pathname === "/stories") {
      return "stories";
    }
  };

  return (
    <div className="App">
      <Navbar checkActive={checkActive} />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
