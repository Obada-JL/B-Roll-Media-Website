import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";
import Footer from "./footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import avatar from "../assets/avatar.png";
import { useRef } from "react";
function Contact() {
  const contactContainer = useRef();
  const teamContainer = useRef();
  const ChangePages = (e) => {
    console.log(e.target.id);
    const teamContainercurrent = teamContainer.current;
    const contactContainercurrent = contactContainer.current;
    if (e.target.id === "contact") {
      teamContainercurrent.style.display = "none";
      contactContainercurrent.style.display = "inline-block";
      contactContainercurrent.style.animationName = "fadeInUp";
      contactContainercurrent.style.animationDirection = "alternate";
    } else {
      contactContainercurrent.style.display = "none";
      teamContainercurrent.style.display = "inline-block";
      teamContainercurrent.style.animationName = "fadeInUp";
      teamContainercurrent.style.animationDirection = "alternate";
    }
  };
  return (
    <>
      <div className="ContactContainer overflow-hidden" id="ContactContainer">
        <div className="ContactHeaders  d-flex flex-column justify-content-center align-items-center pt-5">
          <p className="header1">Stay Connected</p>
          <h2 className="header2">Let’s Work Together</h2>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center mt-5 pb-3">
          <div>
            <div className="footerContainer">
              <div className="footerlinks">
                <ul>
                  <li onClick={ChangePages} id="contact">
                    Contact Us
                  </li>
                  <li onClick={ChangePages} id="team">
                    Our Team
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-row-reverse overflow-hidden"
            style={{ overflowX: "hidden" }}
          >
            <div ref={contactContainer} className="ContactCard contactPage">
              <div className="d-flex align-items-center justify-content-around cardContainer">
                <div
                  className="d-flex align-items-center"
                  style={{ marginTop: "34.5px", flex: "50%" }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d796.2556092364495!2d37.326506869584456!3d37.03311136884887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e06fb8202bdf%3A0xae60a4cf30582b26!2sYeditepe%2C%2085079.%20Sk.%2C%2027470%20%C5%9Eahinbey%2FGaziantep!5e0!3m2!1str!2str!4v1716759448285!5m2!1str!2str"
                    width="470"
                    height="385"
                    allowfullscreen=""
                    loading="lazy"
                    style={{ borderRadius: "15px" }}
                    className="map"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div style={{ flex: "50%", marginTop: "70px" }}>
                  <div>
                    <ul className="d-flex justify-content-around socialMediaIcons">
                      <li>
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          className="socialMediaIcon"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="socialMediaIcon"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faFacebookSquare}
                          className="socialMediaIcon"
                        />
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="socialMediaIcon"
                        />
                      </li>
                    </ul>
                    <p className="companyName">@mediabroll</p>
                    <hr></hr>
                    <div className="d-flex gap-3 ">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="socialMediaIcon contactInfosLogo"
                      />
                      <p className="secondSectionInfo">+90 536 990 92 29</p>
                    </div>
                    <div className="d-flex gap-3">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="socialMediaIcon contactInfosLogo"
                      />
                      <p className="secondSectionInfo">info@broll.media</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={teamContainer} className="ContactCard teamPage">
              <h1 className="fw-bold text-light text-center mt-3">Our Team</h1>
              <div className=" ourTeam h-75  pt-3">
                <div className="teamMember">
                  <div className="member">
                    <div className="PersonalPhotoContainer">
                      <img
                        src={avatar}
                        width={75}
                        height={75}
                        className="PersonalPhoto"
                      />
                    </div>
                    <div className="personNameContainer">
                      <p className="personName">Ghazwan Shabaan</p>
                      <p className="position">CEO | Graphic Designer</p>
                    </div>
                  </div>
                </div>
                <div className="teamMember">
                  <div className="member">
                    <div className="PersonalPhotoContainer">
                      <img
                        src={avatar}
                        width={75}
                        height={75}
                        className="PersonalPhoto"
                      />
                    </div>
                    <div className="personNameContainer">
                      <p className="personName">Abdulrahim Arif</p>
                      <p className="position">Art Director</p>
                    </div>
                  </div>
                </div>
                <div className="teamMember">
                  <div className="member">
                    <div className="PersonalPhotoContainer">
                      <img
                        src={avatar}
                        width={75}
                        height={75}
                        className="PersonalPhoto"
                      />
                    </div>
                    <div className="personNameContainer">
                      <p className="personName">M.Ali</p>
                      <p className="position">Marketing & Traning</p>
                    </div>
                  </div>
                </div>
                <div className="teamMember">
                  <div className="member">
                    <div className="PersonalPhotoContainer">
                      <img
                        src={avatar}
                        width={75}
                        height={75}
                        className="PersonalPhoto"
                      />
                    </div>
                    <div className="personNameContainer">
                      <p className="personName">Abdulaziz Abbas</p>
                      <p className="position">Motion Editor</p>
                    </div>
                  </div>
                </div>
                <div className="teamMember">
                  <div className="member">
                    <div className="PersonalPhotoContainer">
                      <img
                        src={avatar}
                        width={75}
                        height={75}
                        className="PersonalPhoto"
                      />
                    </div>
                    <div className="personNameContainer">
                      <p className="personName">Obada Jlelati</p>
                      <p className="position">Fullstack Developer</p>
                    </div>
                  </div>
                </div>
                <div className="teamMember">
                  <div className="member">
                    <div className="PersonalPhotoContainer">
                      <img
                        src={avatar}
                        width={75}
                        height={75}
                        className="PersonalPhoto"
                      />
                    </div>
                    <div className="personNameContainer">
                      <p className="personName">Can Sakka</p>
                      <p className="position">Video Editor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr
            style={{ width: "90%", height: "1px", opacity: ".5" }}
            className="text-secondary"
          />
        </div>

        <Footer />
      </div>
    </>
  );
}
export default Contact;
