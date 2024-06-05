import React, { useEffect, useState } from "react";
import Project1 from "../assets/projects photo test 1.webp";
import Project2 from "../assets/projects photo test 2.webp";
import Project3 from "../assets/projects photo test 3.webp";
const ProjectsDetails = () => {
  const project1Title = "Beard Production Line: SAKK Ovens";
  const project1Date = "May 2024";
  // Project2 infos
  const project2Title = "Syrian Refugees Shelter: Qatar Charity";
  const project2Date = "June 2018";
  // Project3 infos
  const project3Title = "Graphic Design Training Course: GHAZWAN SHABAAN";
  const project3Date = "Jul 2023";
  // codeSolving User Pain Points: A Deep Dive into Spotify UX
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
  const [projectss, setProjects] = useState([]);
  useEffect(() => {
    const Project = AllProjects.map((project, index) => (
      <a href="#" style={{ width: "420px", display: "block" }}>
        <div>
          <img
            src={project.img}
            height={498}
            style={{ width: "100%", borderRadius: "32px" }}
            className="projectImg"
          />
        </div>
        <div className="p-2 mt-3">
          <h4 className="projectTitle text-dark">{project.title}</h4>
          <p className="projectDate pt-3 text-dark">{project.date}</p>
        </div>
      </a>
    ));
    setProjects(Project);
  }, []);
  console.log(projectss);
  return (
    <div className="text-dark p-relative d-flex flex-wrap mt-5 justify-content-around">
      {projectss}
    </div>
  );
};
export default ProjectsDetails;
