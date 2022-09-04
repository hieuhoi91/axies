import React, { useEffect, useState } from 'react';
import liveAuctionsData from '../../data/liveAuctions';
import LiveAuction from './LiveAuction';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const SwipeAuction = ({
  indexActive,
  handleActive,
  index,
  setIndexAuction,
}) => {
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
          setIndexAuction(index);
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
  const [indexAuction, setIndexAuction] = useState(0);
  const [iconDisabledLeft, setIconDisabledLeft] = useState(
    'live-auction-icon-disabled'
  );
  const [iconDisabledRight, setIconDisabledRight] =
    useState('live-auction-icon');

  const handleActive = index => {
    setIndexActive(index);
  };

  const handlePrev = () => {
    setIndexActive(indexActive - 1);
    if (indexActive === 1) {
      setIconDisabledLeft('live-auction-icon-disabled');
      return;
    }
    setIconDisabledRight('live-auction-icon');
    setIndexAuction(indexAuction - 1);
  };

  const handleForward = () => {
    setIndexActive(indexActive + 1);
    if (indexActive >= 2) {
      setIconDisabledRight('live-auction-icon-disabled');
      return;
    }
    setIconDisabledLeft('live-auction-icon');
    setIndexAuction(indexAuction + 1);
  };

  return (
    <div className="live-auctions">
      <div className="live-auction-nav">
        <h2>Live Auctions</h2>
        <a href="/">EXPLORE MORE</a>
      </div>
      <div className="live-auction-list">
        {liveAuctionsData
          .filter((_, idx) => idx >= indexAuction && idx < 4 + indexAuction)
          .map(item => (
            <LiveAuction item={item} />
          ))}
      </div>
      <div className="live-auction-swipe">
        <KeyboardArrowLeftIcon
          className={iconDisabledLeft}
          onClick={handlePrev}
        />
        {list.map((_, index) => (
          <SwipeAuction
            indexActive={indexActive}
            handleActive={handleActive}
            setIndexAuction={setIndexAuction}
            index={index}
          />
        ))}
        <KeyboardArrowRightIcon
          onClick={handleForward}
          className={iconDisabledRight}
        />
      </div>
    </div>
  );
};

export default LiveAuctionsList;
