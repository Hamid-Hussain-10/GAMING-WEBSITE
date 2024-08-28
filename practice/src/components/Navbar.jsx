import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <div className="top-header">
        <ul>
          <li>03433563121</li>
          <li>|</li>
          <li>hhdev@gmail</li>
          <li>|</li>
          <li>KORANGI, KARACHI</li>
          <li>|</li>
          <li>PAKISTAN 5173</li>

        </ul>
        <div className="social-icons">
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
      <div className="header">
        <img src="./a.png" alt="logo" className="logo"/>
        <ul>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">GAMING ZONE</a></li>
          <li><a href="#">GALLERY</a></li>
        </ul>
        <button>search</button>
      </div>
    </div>
  );
}

export default Navbar;
