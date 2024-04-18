import testBg from "../assets/BROLL MEDIA BG1.jpg";
import "./MainPage.css";
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
              <span className="servicesMainHeader">What We do ?</span>
            </h2>
            <p className="servicesDescription mt-3">
              Our services include UX/UI design, custom web development, and
              brand identity redesign. We collaborate closely with clients to
              understand their vision, offering tailored solutions that enhance
              digital presence and engagement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPage;
