import NavLogo from "../assets/b roll media.png";
function NavBar() {
  return (
    <div className="d-flex justify-content-center">
      <div className="headerContainer">
        <div className="navlogo">
          <img src={NavLogo} width={125} />
        </div>
        <div className="links">
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
  );
}
export default NavBar;
