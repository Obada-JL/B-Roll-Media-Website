// import React, { useEffect, useState } from "react";
import Project1 from "../assets/sakk project.jpg";
import Project2 from "../assets/ATAA Project.jpg";
import Project3 from "../assets/agha project.jpg";
import "./ProjectsDetails.css";
import { useEffect, useState } from "react";

const ProjectsDetails = () => {
  const project1Title = "Beard Production Line: SAKK Ovens";
  const project1Date = "May 2024";
  const project2Title = "Safe School Common Approach Workshop: ATAA Relief";
  const project2Date = "Mar 2022";
  const project3Title = "Industrial Catalog : AGHA Group";
  const project3Date = "Jul 2020";

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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoURL, setVideoURL] = useState("");

  const handleDivClick = (e) => {
    const videoId = e.currentTarget.id;
    let url = "";
    if (videoId == 0) {
      url =
        "https://drive.google.com/file/d/1oW2FLVna-hIk8DPKXbvbqmTy-7V4IxAm/view?usp=sharing";
    } else if (videoId == 1) {
      url =
        "https://drive.google.com/file/d/14n_bPX10tvShTshZAjMOeB6wVlvF5Sce/preview";
    } else if (videoId == 2) {
      url = "";
    }

    if (url) {
      setVideoURL(
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <iframe
              width="450px"
              height="250px"
              src={url}
              className="embedVideo"
              title="Video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      );
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    const Project = AllProjects.map((project, index) => (
      <a
        key={index}
        href={
          index == 2
            ? "https://www.behance.net/gallery/83656395/Industrial-catalog"
            : "#"
        }
        style={{ width: "420px", display: "block" }}
        target={index == 2 ? "_blank" : "_self"}
        onClick={index != 2 ? handleDivClick : null}
        id={index}
      >
        <div>
          <img
            src={project.img}
            height={498}
            style={{
              width: "100%",
              borderRadius: "32px",
              borderColor: "#1a2264",
              border: "2px solid",
            }}
            className="projectImg"
            alt={project.title}
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

  return (
    <div className="text-dark p-relative d-flex flex-wrap mt-5 justify-content-around">
      {projects}
      {isModalVisible && videoURL}
    </div>
  );
};

export default ProjectsDetails;
