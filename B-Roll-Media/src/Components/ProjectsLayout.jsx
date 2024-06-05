import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar";
import Contact from "../Components/Contact";
import testBg from "../assets/BROLL MEDIA BG1.jpg";
import "./ProjectsLayout.css";

function ProjectsLayout() {
  return (
    <div>
      <NavBar />
      <div className="MainPageConatiner">
        <div>
          <div
            className="position-absolute top-50 left-50 text-center projectsTitle"
            style={{ transform: "translate(-50%, -50%)", left: "50%" }}
          >
            <p className="secondaryTitle">Success Stories</p>
            <p className="primaryTitle">Case Studies</p>
          </div>
          <div style={{ position: "relative" }}></div>
          <img src={testBg} style={{ height: "75vh", width: "98.93vw" }} />
        </div>

        <div>
          <Outlet />
        </div>
      </div>
      <Contact />
    </div>
  );
}
export default ProjectsLayout;
