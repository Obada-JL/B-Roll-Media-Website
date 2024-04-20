import Project1 from "../assets/projects photo test 1.webp";
import Project2 from "../assets/projects photo test 2.webp";
import Project3 from "../assets/projects photo test 3.webp";
import { useEffect, useState } from "react";
import "./Projects.css";
function Projects() {
  // Project1 infos
  const project1Title = "The Wireframing Process: A Comprehensive Guide";
  const project1Date = "Feb 3 , 2024";
  // Project2 infos
  const project2Title = "Solving User Pain Points: A Deep Dive into Spotify UX";
  const project2Date = "Feb 1 , 2024";
  // Project3 infos
  const project3Title = "Designing Delight: A Journey Through the UX of Apple";
  const project3Date = "Feb 2 , 2024";
  // code
  const AllProjects = [
    {
      img: Project1,
      title: project1Title,
      date: project1Date,
    },
    {
      img: Project2,
      title: project2Title,
      date: project2Date,
    },
    {
      img: Project3,
      title: project3Title,
      date: project3Date,
    },
  ];
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const Project = AllProjects.map((project, index) => (
      <a href="#" style={{ flex: "1 0 0" }}>
        <div style={{ flex: "1 0 0" }}>
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
    <div className="d-flex gap-5 justify-content-between w-100">{projects}</div>
  );
}
export default Projects;
