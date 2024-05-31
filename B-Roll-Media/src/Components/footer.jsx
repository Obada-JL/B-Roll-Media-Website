import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
function Footer() {
  const currentDate = new Date();
  const Year = currentDate.getFullYear();
  return (
    <div>
      <div className="d-flex justify-content-center ps-5 pe-5 text-light">
        <div className="copyright">
          <p>Copyright © B-Roll Media {Year}</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
