import "./Contact.css";
function Contact() {
  return (
    <div className="bg-dark">
      <div className="ContactHeaders  d-flex flex-column justify-content-center align-items-center pt-5">
        <p className="header1">Stay Connected</p>
        <h2 className="header2">Let’s Work Together</h2>
      </div>
      <div className="ContactForm">
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <textarea />
        </div>
      </div>
    </div>
  );
}
export default Contact;
