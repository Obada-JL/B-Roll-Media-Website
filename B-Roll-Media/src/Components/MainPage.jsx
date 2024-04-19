import testBg from "../assets/BROLL MEDIA BG1.jpg";
import "./MainPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
function MainPage() {
  return (
    <>
      <div style={{ position: "absolute", top: "0", zIndex: "-10" }}>
        <img src={testBg} style={{ height: "100vh", width: "98.93vw" }} />
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
      </div>
    </>
  );
}
export default MainPage;
