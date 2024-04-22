import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
function Footer() {
  return (
    <div>
      <div className="d-flex justify-content-between ps-5 pe-5 text-light">
        <div className="copyright">
          <p>Copyright © CanvasCraft️ 2024</p>
        </div>
        <div className="socialMediaLinks">
          <ul className="socialMediaUl d-flex gap-3">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>
            <li>
              <FontAwesomeIcon icon={faLinkedin} />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center">
          <div className="footerContainer">
            <div className="footerlinks">
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
      </div>
    </div>
  );
}
export default Footer;
