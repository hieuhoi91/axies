import React, { useEffect, useState } from 'react';
import liveAuctionsData from '../../data/liveAuctions';
import LiveAuction from './LiveAuction';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SwipeAuction = ({ indexActive, handleActive, index }) => {
  const [slider, setSlider] = useState('swipe');

  useEffect(() => {
    if (index === indexActive) {
      setSlider('swipe-pagination-active');
    } else {
      setSlider('swipe');
    }
  }, [indexActive]);
  return (
    <div className="swipe-list">
      <span
        className={slider}
        onClick={() => {
          handleActive(index);
        }}
      ></span>
    </div>
  );
};
//    'live-auction-icon-disabled'
//'live-auction-icon'
const LiveAuctionsList = () => {
  const list = [1, 2, 3, 4];
  const [indexActive, setIndexActive] = useState(0);
  const [iconDisabledLeft, setIconDisabledLeft] = useState(true);
  const [iconDisabledRight, setIconDisabledRight] = useState(false);

  const handleActive = index => {
    setIndexActive(index);
  };

  const handlePrev = () => {
    setIndexActive(indexActive - 1);
    if (indexActive === 1) {
      return;
    }
  };

  const handleForward = () => {
    setIndexActive(indexActive + 1);
    if (indexActive >= 2) {
      return;
    }
  };

  useEffect(() => {
    indexActive === 0 ? setIconDisabledLeft(true) : setIconDisabledLeft(false);
    indexActive > 2 ? setIconDisabledRight(true) : setIconDisabledRight(false);
  }, [indexActive]);

  return (
    <div className="live-auctions">
      <div className="live-auction-nav">
        <h2>Live Auctions</h2>
        <a href="/">EXPLORE MORE</a>
      </div>
      <div className="live-auction-list">
        {liveAuctionsData
          .filter((_, idx) => idx >= indexActive && idx < 4 + indexActive)
          .map(item => (
            <LiveAuction item={item} />
          ))}
      </div>
      <div className="live-auction-swipe">
        <KeyboardArrowLeftIcon
          className={
            iconDisabledLeft
              ? 'live-auction-icon-disabled'
              : 'live-auction-icon'
          }
          onClick={handlePrev}
        />
        {list.map((_, index) => (
          <SwipeAuction
            indexActive={indexActive}
            handleActive={handleActive}
            index={index}
          />
        ))}
        <KeyboardArrowRightIcon
          onClick={handleForward}
          className={
            iconDisabledRight
              ? 'live-auction-icon-disabled'
              : 'live-auction-icon'
          }
        />
      </div>
    </div>
  );
};

export default LiveAuctionsList;
