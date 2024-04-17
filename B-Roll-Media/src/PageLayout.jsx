import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar";
import testBg from "./assets/bg-test.webp";
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
    </div>
  );
}
export default PageLayout;
