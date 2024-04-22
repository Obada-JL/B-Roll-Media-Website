import "./Contact.css";
import Footer from "./footer";
function Contact() {
  return (
    <>
      <div className="ContactContainer">
        <div className="ContactHeaders  d-flex flex-column justify-content-center align-items-center pt-5">
          <p className="header1">Stay Connected</p>
          <h2 className="header2">Let’s Work Together</h2>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center mt-5 pb-3">
          <div className="ContactForm d-flex flex-column align-items-center justify-content-center gap-5 pb-3 ">
            <div className="d-flex justify-content-between w-100 ">
              <input
                type="text"
                className="infoInputs"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="infoInputs"
                placeholder="Email Adress"
              />
            </div>

            <textarea className="textArea" placeholder="Message" />
            <button className="w-100 bg-light ContactButton">Send</button>
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
