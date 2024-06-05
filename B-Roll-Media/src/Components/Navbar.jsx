import { useInView } from "react-intersection-observer";
import NavLogo from "../assets/b roll media.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  return (
    <div className="d-flex justify-content-center navbar navbar-expand-lg">
      <div
        ref={ref}
        className={`container-fluid headerContainer transition-all ${
          inView ? "firstSectionContainer" : ""
        }`}
      >
        <div className="navlogo navbar-brand">
          <Link to={"/"}>
            <img src={NavLogo} width={125} />
          </Link>
        </div>
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon text-light"></span>
        </button>
        <div
          className="links collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#servicesSection">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#projectsSection">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#reviewsContainer">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#ContactContainer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    // <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Features
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Pricing
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a
    //             class="nav-link disabled"
    //             href="#"
    //             tabindex="-1"
    //             aria-disabled="true"
    //           >
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
export default NavBar;
