import Link from "next/link";
import Image from "next/image";

const NavMenu = () => {
  return (
<>
  {/* Sidebar/menu */}
  <nav
    className="w3-sidebar w3-collapse w3-white w3-animate-left"
    style={{ zIndex: 3, width: 300 }}
    id="mySidebar"
  >
    <br />
    <div className="w3-container w3-row">
      <div className="w3-col s4">
        <img
          src="/avatar2.png"
          className="w3-circle w3-margin-right"
          style={{ width: 46 }}
        />
      </div>
      <div className="w3-col s8 w3-bar">
        <span>
          Welcome, <strong>Mike</strong>
        </span>
        <br />
        <a href="#" className="w3-bar-item w3-button">
          <i className="fa fa-envelope" />
        </a>
        <a href="#" className="w3-bar-item w3-button">
          <i className="fa fa-user" />
        </a>
        <a href="#" className="w3-bar-item w3-button">
          <i className="fa fa-cog" />
        </a>
      </div>
    </div>
    <hr />
    <div className="w3-container">
      <h5>Dashboard</h5>
    </div>
    <div className="w3-bar-block">
      <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" title="close menu">
        <i className="fa fa-remove fa-fw" />
        &nbsp; Close Menu
      </a>
      <Link href="/" className="w3-bar-item w3-button w3-padding w3-blue">
        <i className="fa fa-home fa-fw" />
        &nbsp; Home
      </Link>
      <Link href="/about" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-eye fa-fw" />
        &nbsp; About
      </Link>
      <Link href="/movie" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-users fa-fw" />
        &nbsp; Movie
      </Link>
      <Link href="contact" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-bullseye fa-fw" />
        &nbsp; Contact
      </Link>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-diamond fa-fw" />
        &nbsp; Orders
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-bell fa-fw" />
        &nbsp; News
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-bank fa-fw" />
        &nbsp; General
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-history fa-fw" />
        &nbsp; History
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding">
        <i className="fa fa-cog fa-fw" />
        &nbsp; Settings
      </a>
      <br />
      <br />
    </div>
  </nav>
  {/* Overlay effect when opening sidebar on small screens */}
  <div className="w3-overlay w3-hide-large w3-animate-opacity" style={{ cursor: "pointer" }}
    title="close side menu" id="myOverlay" />
</>
  );
};

export default NavMenu;
