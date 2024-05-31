import { useInView } from "react-intersection-observer";
import NavLogo from "../assets/b roll media.png";
function NavBar() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  return (
    <div className="d-flex justify-content-center">
      <div
        ref={ref}
        className={`headerContainer transition-all ${
          inView ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="navlogo">
          <img src={NavLogo} width={125} />
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Works</li>
            <li>Reviews</li>
            <li>Contact</li>
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
