import React, { useRef } from "react";
import "./styles/NavBar.css";
import Image from "next/image";
import Images from "@/assets/images/images";
import Link from "next/link";

const NavBar = () => {
  const navRef = useRef<any>();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h1 className="logo">ecommerce</h1>
      <div className="responsive_search">
        <input type="text" className="searchInput" placeholder="search..." />
        <button onClick={showNavBar} className="nav-btn">
          <Image src={Images.menu} alt="menu-btn" className="menuImg" />
        </button>
      </div>
      <nav ref={navRef}>
        <button onClick={showNavBar} className="nav-btn nav-close-btn">
          <Image src={Images.close} alt="close-btn" />
        </button>
        <div>
          <div className="languageContainer">
            <Image
              src={Images.language}
              alt="languages"
              width={23}
              height={23}
            />
            <select name="" id="languageSelector">
              <option value="">English</option>
              <option value="">Arabic</option>
              <option value="">Hebrow</option>
            </select>
          </div>
        </div>
        <p className="separator">|</p>
        <div className="loginContainer">
          <a href="#" className="loginBtn">
            login
          </a>
          <Link href={""} className="getStartedBtn">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
