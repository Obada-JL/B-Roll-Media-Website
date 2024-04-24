import testBg from "../assets/BROLL MEDIA BG1.jpg";
import "./MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faBriefcase,
  faCommentDots,
  faGlobe,
  faHouse,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects";
import Test from "./test";
import Reviews from "./reviews";
import Contact from "./Contact";
import { useRef } from "react";

function MainPage() {
  const names = useRef();
  const displayingSidebar = (number) => {
    names.current.children[number].classList.add("sidebarServices");
  };
  const HideSidebar = (number) => {
    names.current.children[number].classList.remove("sidebarServices");
  };
  return (
    <>
      <div style={{ position: "absolute", top: "0" }}>
        <img src={testBg} style={{ height: "100vh", width: "98.93vw" }} />
      </div>
      <div className="sidebar">
        <ul>
          <li
            onMouseEnter={() => {
              displayingSidebar(0);
            }}
            onMouseLeave={() => {
              HideSidebar(0);
            }}
          >
            <FontAwesomeIcon icon={faHouse} size="xl" />
          </li>
          <li
            onMouseEnter={() => {
              displayingSidebar(1);
            }}
            onMouseLeave={() => {
              HideSidebar(1);
            }}
          >
            <FontAwesomeIcon icon={faGlobe} size="xl" />
          </li>
          <li
            onMouseEnter={() => {
              displayingSidebar(2);
            }}
            onMouseLeave={() => {
              HideSidebar(2);
            }}
          >
            <FontAwesomeIcon icon={faBriefcase} size="xl" />
          </li>
          <li
            onMouseEnter={() => {
              displayingSidebar(3);
            }}
            onMouseLeave={() => {
              HideSidebar(3);
            }}
          >
            <FontAwesomeIcon icon={faCommentDots} size="xl" />
          </li>
          <li
            onMouseEnter={() => {
              displayingSidebar(4);
            }}
            onMouseLeave={() => {
              HideSidebar(4);
            }}
          >
            <FontAwesomeIcon icon={faInbox} size="xl" />
          </li>
        </ul>
        <div className="names d-flex flex-column" ref={names}>
          <p className="sidebarNav">Home</p>
          <p className="sidebarNav">Services</p>
          <p className="sidebarNav">Works</p>
          <p className="sidebarNav">Reviews</p>
          <p className="sidebarNav">Contact</p>
        </div>
      </div>
      <div className="appContainer">
        <div className="TextSection">
          <div>
            <p>Designing Tomorrow</p>
            <h1>
              Unleashing Creativity <br />
              <span>in Every</span> Pixel
            </h1>
          </div>
          <button class="button">Case Studies</button>
        </div>
        <div className="servicesSection pt-5">
          <div className="headings">
            <h2>
              <span className="servicesMainHeader mb-3">What We do ?</span>
            </h2>
            <p className="servicesDescription mt-3">
              Our services include UX/UI design, custom web development, and
              brand identity redesign. We collaborate closely with clients to
              understand their vision, offering tailored solutions that enhance
              digital presence and engagement.
            </p>
          </div>
          <div className="services mt-5 mb-5">
            <label htmlFor="service1" class="service service">
              <input type="checkbox" id="service1" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">Product Design</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                We specialize in strategic Product Design that seamlessly blends
                innovation with user interaction. Elevate your digital presence
                with our precise and purpose-driven approach, ensuring your
                audience experiences the perfect fusion of creativity and
                usability. Join us in crafting digital experiences that go
                beyond expectations.
              </p>
            </label>
            <label htmlFor="service2" class="service service">
              <input type="checkbox" id="service2" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">Mobile App Prototyping</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                Bring your app ideas to life with our Mobile App Prototyping
                service. Our team specializes in translating your concepts into
                interactive prototypes, allowing you to visualize and test the
                user experience before development begins. Through meticulous
                wireframing and interactive design, we ensure that your app not
                only looks stunning but also functions seamlessly.
              </p>
            </label>
            <label htmlFor="service3" class="service service">
              <input type="checkbox" id="service3" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">UI/UX Design</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                Unlock the potential of your digital presence with our UX/UI
                Design Consultation service. Our team of experienced designers
                will collaborate with you to analyze, strategize, and enhance
                the user experience of your digital products.
              </p>
            </label>
            <label htmlFor="service4" class="service service">
              <input type="checkbox" id="service4" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">Brand Identity Design</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                Revamp your brand's visual identity and make a lasting
                impression with our Identity Redesign Services. Our skilled
                designers will work closely with you to breathe new life into
                your brand, creating a cohesive and compelling visual language.
                From logo redesign to color palette optimization, we reimagine
                every element to resonate with your target audience.
              </p>
            </label>
          </div>
        </div>
        <div className="projectsSection bg-dark text-light w-100 pt-3 pb-3">
          <div className="projectsHeader d-flex justify-content-between align-items-center pb-5">
            <div className="ProjectsHeader pt-3 d-flex aloign-items-center justify-content-center">
              Recent Works.
            </div>
            <div>
              <button className="projectsButton d-flex gap-2 justify-content-center align-items-center">
                <div className="buttonText">See All</div>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  className="Arrow"
                />
              </button>
            </div>
          </div>
          <div className="Projects pt-5 pb-5">
            <Projects />
          </div>
        </div>
        <div>
          <Reviews />
        </div>
        <div>
          <Contact />
        </div>
        {/* <div>
          <Test />
        </div> */}
      </div>
    </>
  );
}
export default MainPage;
