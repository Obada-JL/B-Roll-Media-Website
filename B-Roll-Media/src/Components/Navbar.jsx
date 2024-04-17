import NavLogo from "../assets/b roll nav logo test.png";
function NavBar() {
  return (
    <div className="appContainer">
      <div className="headerContainer">
        <div className="navlogo">
          <img src={NavLogo} />
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
