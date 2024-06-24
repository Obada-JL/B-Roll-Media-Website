import { useEffect, useState } from "react";
import "./Projects.css";
import MainPage from "./MainPage";
function Projects(props) {
  // Project1 infos
  const AllProjects = props.AllProjects;
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const Project = AllProjects.map((project, index) => (
      <a className="projectLink">
        <div>
          <img
            src={project.img}
            height={498}
            style={{ width: "100%", borderRadius: "32px" }}
            className="projectImg"
          />
        </div>
        <div className="p-2 mt-3">
          <h4 className="projectTitle">{project.title}</h4>
          <p className="projectDate pt-3">{project.date}</p>
        </div>
      </a>
    ));
    setProjects(Project);
  }, []);
  return (
    <>
      <div className="d-flex flex-wrap gap-5 justify-content-between w-100">
        {projects}
      </div>
    </>
  );
}

export default Projects;
