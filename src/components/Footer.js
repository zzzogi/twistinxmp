import React from "react";
import { FaHeart, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img
              src="/images/twistin.png"
              alt="Chung Bảo & Minh Phương"
              className="footer-logo"
            />
            <p className="footer-tagline">7 Năm Yêu Thương, Một Đời Bên Nhau</p>
          </div>

          <div className="footer-section">
            <h4>Liên Hệ</h4>
            <div className="contact-info">
              <p>
                <FaEnvelope />{" "}
                <a href="mailto:ncoab2210@gmail.com">ncoab2210@gmail.com</a>
              </p>
              <p>Hashtag: #TwistinAndMphuong2025</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Kết Nối</h4>
            <div className="social-links">
              <a
                href="https://www.instagram.com/twistin_____/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/chungbao.nguyen.5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            Made with <FaHeart className="heart-icon" /> for Chung Bảo & Minh
            Phương
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} twistinxmp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
