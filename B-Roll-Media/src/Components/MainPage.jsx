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
import Reviews from "./reviews";
import Contact from "./Contact";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Project1 from "../assets/projects photo test 1.webp";
import Project2 from "../assets/projects photo test 2.webp";
import Project3 from "../assets/projects photo test 3.webp";
function MainPage(props) {
  const project1Title = "Safe School Common Approach: ATAA Relief";
  const project1Date = "Mar 2022";
  // Project2 infos
  const project2Title =
    "Industrial Catalog : AGHA GROUP Carpet Industry Machines";
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
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  const { ref2, inView2, entry2 } = useInView({
    threshold: 0.5,
  });
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
      <div className={`sidebar transition-all ${inView ? "d-none" : "d-flex"}`}>
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
        <div
          className={`${inView ? "firstSectionContainer" : ""} TextSection`}
          ref={ref}
        >
          <div className="mb-5">
            <p>B-Roll Media</p>
            <h1>Where Inovation Meets Storytelling</h1>
          </div>
          <button class="button">Promo</button>
        </div>
        <div className="servicesSection pt-5">
          <div className="headings">
            <h2>
              <span className="servicesMainHeader mb-3">What We do ?</span>
            </h2>
            <p className="servicesDescription mt-3">
              We specialize in comprehensive services including high-quality
              video and photo sessions, capturing the essence of products,
              events, and more, Training and marketing services aimed at
              enhancing brand visibility, Expert web design and development
              services to ensure a strong online presence. "Let us bring your
              vision to life and take your brand to new heights"
            </p>
          </div>
          <div className="services mb-5 mt-2">
            <label htmlFor="service5" class="service service">
              <input type="checkbox" id="service5" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">Filming</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                As a specialized media production company, we offer a
                comprehensive range of services that fully meet our clients'
                needs. Our professional offerings include high-quality
                photography and videography, highlighting their products and
                services distinctly, enhancing their brand identity.
                Additionally, we cover and document events and occasions they
                organize, providing them with outstanding media content that
                boosts their presence and attracts more targeted audience.
                Utilizing the latest technologies and equipment, we constantly
                strive to realize our clients' vision and effectively meet their
                expectations in an innovative manner.
              </p>
            </label>
            <label htmlFor="service1" class="service service">
              <input type="checkbox" id="service1" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">Video Production</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                Video production services tailored to your needs. From
                captivating promotional videos to engaging educational content,
                we excel in crafting visually stunning works that leave a
                lasting impression. Whether it's elevating your brand or
                expanding your reach, our experienced team is here to bring your
                vision to life.
              </p>
            </label>
            <label htmlFor="service2" class="service service">
              <input type="checkbox" id="service2" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">Graphic Design</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                Professional graphic design services cater to your needs. From
                logos to digital and print designs, we create visually stunning
                works that fulfill your requirements. Whether refreshing your
                brand or enhancing marketing collateral, we transform your
                dreams into reality
              </p>
            </label>
            <label htmlFor="service3" class="service service">
              <input type="checkbox" id="service3" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">Web Designing & Developing</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                We excel in crafting cutting-edge designs from scratch and
                implementing the latest techniques to provide ui / ux services,
                and enhance web pages according to your requirements.
              </p>
            </label>
            <label htmlFor="service4" class="service service">
              <input type="checkbox" id="service4" class="faq__input" />
              <div className="d-flex justify-content-between serviceHeading">
                <h3 class="serviceName">Marketing & Training</h3>
                <div className="ServiceArrow">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    size="2xs"
                    className="Arrow"
                  />
                </div>
              </div>
              <p class="serviceDescription">
                Empowering businesses with innovative marketing and training
                solutions. Our mission is to exceed expectations by delivering
                high-quality services that inspire growth and foster success.
                With a focus on excellence and customer satisfaction, we aim to
                be your trusted partner in achieving your business objectives.
              </p>
            </label>
          </div>
        </div>
        <div className="projectsSection text-light w-100 pt-3 pb-3">
          <div className="projectsHeader d-flex justify-content-between align-items-center pb-5">
            <div className="ProjectsHeader pt-3 d-flex aloign-items-center justify-content-center">
              Recent Works
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
            <Projects AllProjects={AllProjects} />
          </div>
        </div>
        <div>
          <Reviews />
        </div>
        <div>{/* <Contact /> */}</div>
        {/* <div>
          <Test />
        </div> */}
      </div>
    </>
  );
}
export default MainPage;
