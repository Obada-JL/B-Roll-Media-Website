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
  );
}
export default NavBar;
