import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* Logo bên trái */}
          <div className="logo">
            <img
              src="/images/twistin.png"
              alt="Chung Bảo & Minh Phương"
              className="logo-image"
            />
          </div>

          {/* Navigation menu giữa */}
          <nav className={`nav-menu ${mobileMenu ? "active" : ""}`}>
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMobileMenu}
              className="nav-link"
            >
              Trang Chủ
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="nav-link"
            >
              Về Chúng Tôi
            </Link>
            <Link
              to="story"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="nav-link"
            >
              Câu Chuyện
            </Link>
            <Link
              to="mv"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="nav-link"
            >
              Video
            </Link>
            <Link
              to="testimonial"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMobileMenu}
              className="nav-link"
            >
              Lời Chúc
            </Link>
          </nav>

          {/* Save The Date Button bên phải */}
          {/* <Link
            to="savethedate"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="nav-button"
          >
            Save The Date
          </Link> */}

          {/* Mobile menu icon */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenu && (
        <div className="menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </>
  );
};

export default Header;
