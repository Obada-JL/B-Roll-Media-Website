import testBg from "../assets/BROLL MEDIA BG1.jpg";
import "./MainPage.css";
function MainPage() {
  return (
    <>
      <div style={{ position: "absolute", top: "0", zIndex: "-10" }}>
        <img src={testBg} style={{ width: "100%" }} />
      </div>
      <div className="TextSection">
        <div>
          <p>Designing Tomorrow</p>
          <h1>
            Unleashing Creativity <br />
            <span>in Every</span> Pixel
          </h1>
        </div>
        <button className="TextSectionButton">
          <div className="border">
            <div>Case Studies</div>
          </div>
        </button>
        <button class="button">
          <div class="dots_border"></div>
          <span class="text_button">Generate Site</span>
        </button>
      </div>
    </>
  );
}
export default MainPage;
