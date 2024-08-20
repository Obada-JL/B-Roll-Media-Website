// import "./ProjectsDetails.css";
// import { useEffect, useState } from "react";

// const ProjectsDetails = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [videoURL, setVideoURL] = useState("");

//   const closeModal = () => {
//     setIsModalVisible(false);
//   };
//   const openModal = (link) => {
//     setIsModalVisible(true);
//     setVideoURL(
//       <div className="modal">
//         <div className="modal-content">
//           <span className="close-button" onClick={closeModal}>
//             &times;
//           </span>
//           <iframe
//             width="450px"
//             height="250px"
//             src={link}
//             className="embedVideo"
//             title="Video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           ></iframe>
//         </div>
//       </div>
//     );
//   };
//   const [getProjects, setGetProjects] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/projects", { method: "GET" })
//       .then((res) => res.json())
//       .then((data) => setGetProjects(data));
//   }, []);

//   const Project = getProjects.map((project, index) => (
//     <a
//       key={index}
//       href={project.modalType === "redirect" ? project.modalLink : null}
//       style={{ width: "420px", display: "block" }}
//       target={project.modalType === "redirect" ? "_blank" : "_self"}
//       onClick={
//         project.modalType == "url"
//           ? () => {
//               openModal(project.modalLink);
//             }
//           : null
//       }
//       id={index}
//     >
//       <div>
//         <img
//           src={`http://localhost:5000/uploads/${project.picture}`}
//           height={498}
//           style={{
//             width: "100%",
//             borderRadius: "32px",
//             borderColor: "#1a2264",
//             border: "2px solid",
//           }}
//           className="projectImg"
//           alt={project.title}
//         />
//       </div>
//       <div className="p-2 mt-3">
//         <h4 className="projectTitle text-dark">{project.title}</h4>
//         <p className="projectDate pt-3 text-dark">{project.date}</p>
//       </div>
//     </a>
//   ));
//   return (
//     <div className="text-dark p-relative d-flex flex-wrap mt-5 justify-content-around">
//       {Project}
//       {isModalVisible && videoURL}
//     </div>
//   );
// };

// export default ProjectsDetails;
import "./ProjectsDetails.css";
import { useEffect, useState } from "react";

const ProjectsDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [videoURL, setVideoURL] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [getProjects, setGetProjects] = useState([]);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const openModal = (link) => {
    setIsModalVisible(true);
    setVideoURL(
      <div className="modal">
        <div className="modal-content">
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <iframe
            width="450px"
            height="250px"
            src={link}
            className="embedVideo"
            title="Video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/projects", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setGetProjects(data);
        setIsLoading(false); // Data fetched, stop loading
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setIsLoading(false); // Stop loading even if there is an error
      });
  }, []);

  const Project = getProjects.map((project, index) => (
    <a
      key={index}
      href={project.modalType === "redirect" ? project.modalLink : null}
      style={{ width: "420px", display: "block" }}
      target={project.modalType === "redirect" ? "_blank" : "_self"}
      onClick={
        project.modalType === "url"
          ? (e) => {
              e.preventDefault();
              openModal(project.modalLink);
            }
          : null
      }
      id={index}
    >
      <div>
        <img
          src={`http://localhost:5000/uploads/${project.picture}`}
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

  return (
    <div className="text-dark p-relative d-flex flex-wrap mt-5 justify-content-around">
      {isLoading ? (
        <div class="spinner center">
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
        </div> // Show loader while loading
      ) : (
        Project
      )}
      {isModalVisible && videoURL}
    </div>
  );
};

export default ProjectsDetails;
