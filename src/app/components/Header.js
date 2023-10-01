import styles from "@/app/styles/w3.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
    {/* Top container */}
        <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
          <button
            className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey">
            <i className="fa fa-bars" /> &nbsp;Menu
          </button>
          <span className="w3-bar-item w3-right">Logo</span>
        </div>
    </>
  );
};

export default Header;
