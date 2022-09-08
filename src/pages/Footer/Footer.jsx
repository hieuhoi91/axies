import React from 'react';
import './footer.scss';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <div className="logo-img">
          <img
            src="data:image/png;base64,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"
            alt="axies"
          />
        </div>
        <p className="logo-description">
          Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non,
          fugit totam vel laboriosam vitae.
        </p>
      </div>
      <div className="menu">
        <h5 className="menu-title">My Account</h5>
        <ul>
          <li>
            <a href="/">Authors</a>
          </li>
          <li>
            <a href="/">Collection</a>
          </li>
          <li>
            <a href="/">Author Profile</a>
          </li>
          <li>
            <a href="/">Create Item</a>
          </li>
        </ul>
      </div>
      <div className="menu">
        <h5 className="menu-title">Resources</h5>
        <ul>
          <li>
            <a href="/">Help & Support</a>
          </li>
          <li>
            <a href="/">Live Auctions</a>
          </li>
          <li>
            <a href="/">Item Details</a>
          </li>
          <li>
            <a href="/">Activity</a>
          </li>
        </ul>
      </div>
      <div className="menu">
        <h5 className="menu-title">Company</h5>
        <ul>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Our Blog</a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="menu">
        <h5 className="menu-title">Subscribe Us</h5>
        <form action="#" className="form-input">
          <input type="text" placeholder="info@yourgmail.com" />
          <button>
            <SendIcon className="btn-icon" />
          </button>
        </form>
        <div className="menu-social">
          <a href="/" className="icon-social">
            <TwitterIcon className="icon" />
          </a>
          <a href="/" className="icon-social">
            <FacebookIcon className="icon" />
          </a>
          <a href="/" className="icon-social">
            <TelegramIcon className="icon" />
          </a>
          <a href="/" className="icon-social">
            <YouTubeIcon className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
