import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Footer from "./Components/footer";
import Contact from "./Components/Contact";
// import Footer from "./Footer";

function PageLayout() {
  return (
    <div>
      <NavBar />
      {/* <div style={{ position: "absolute", top: "0", zIndex: "-10" }}>
        <img src={testBg} style={{ width: "100vw" }} />
      </div> */}
      <div className="MainPageConatiner">
        <Outlet />
      </div>
      {/* <Footer /> */}
      <Contact />
    </div>
  );
}
export default PageLayout;
