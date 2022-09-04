import React from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import './homeSlide.style.scss';

const HomeSlide = () => {
  return (
    <div>
      <div className="flat-title-page">
        <div className="shape item-w-16"></div>
        <div className="shape item-w-22"></div>
        <div className="shape item-w-32"></div>
        <div className="shape item-w-48"></div>
        <div className="shape style2 item-w-51"></div>
        <div className="shape style3 item-w-51"></div>
        <div className="shape item-w-68"></div>
      </div>
      <div className="swipe-slide">
        <div className="content">
          <div className="title-content">
            <h2>Discover, find,</h2>
            <span className="title-gradient">Sell extraordinary</span>
            <h1>Monster NFTs</h1>
            <p>
              Marketplace for monster character cllections non fungible token
              NFTs
            </p>
          </div>
          <div className="menu-btn">
            <button className="btn-item">
              <RocketLaunchIcon className="icon" />
              <span>Explore</span>
            </button>
            <button className="btn-item">
              <StickyNote2Icon className="icon" />
              <span>Create</span>
            </button>
          </div>
        </div>
        <div className="image">
          <img
            className="image-1"
            src="https://axiesreact.surielementor.com/static/media/bg_slide_1.73bec561ec8b64df09cc.png"
            alt="a"
          />
          <img
            className="image-2"
            src="https://axiesreact.surielementor.com/static/media/slide_1.b0f158a748fcae52d46f.png"
            alt="a"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
