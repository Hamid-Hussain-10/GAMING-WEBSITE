import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="./about-img.png" alt="" className="footer-logo" />
        <div className="footer-links-container">
          <h2 className="footer-links-title">CATEGORIES #1</h2>
          <nav className="footer-links-nav">
            <li>
              <a className="footer-link">First Link</a>
            </li>
            <li>
              <a className="footer-link">Second Link</a>
            </li>
            <li>
              <a className="footer-link">Third Link</a>
            </li>
            <li>
              <a className="footer-link">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="footer-links-container">
          <h2 className="footer-links-title">CATEGORIES #2</h2>
          <nav className="footer-links-nav">
            <li>
              <a className="footer-link">First Link</a>
            </li>
            <li>
              <a className="footer-link">Second Link</a>
            </li>
            <li>
              <a className="footer-link">Third Link</a>
            </li>
            <li>
              <a className="footer-link">Fourth Link</a>
            </li>
          </nav>
        </div>
        <div className="footer-links-container">
          <h2 className="footer-links-title">CATEGORIES #3</h2>
          <nav className="footer-links-nav">
            <li>
              <a className="footer-link">First Link</a>
            </li>
            <li>
              <a className="footer-link">Second Link</a>
            </li>
            <li>
              <a className="footer-link">Third Link</a>
            </li>
            <li>
              <a className="footer-link">Fourth Link</a>
            </li>
          </nav>
        </div>
      </div>
      <div className="footer-bottom-container">
        <p className="footer-bottom-text">© 2024 Gaming — World</p>
        <div className="footer-social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
