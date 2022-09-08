import React, { useEffect, useState } from 'react';
import liveAuctionsData from '../../data/liveAuctions';
import LiveAuction from './LiveAuction';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HomeNav from '../HomeNav';

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

const LiveAuctionsList = () => {
  const list = [1, 2, 3, 4];
  const [indexActive, setIndexActive] = useState(0);
  const [iconDisabledLeft, setIconDisabledLeft] = useState(true);
  const [iconDisabledRight, setIconDisabledRight] = useState(false);
  const [swiper, setSwiper] = useState();

  const handleActive = index => {
    swiper.slideTo(index);
    setIndexActive(index);
  };

  const handlePrev = () => {
    swiper.slidePrev();
    if (indexActive === 0) {
      return;
    }
    setIndexActive(indexActive - 1);
  };

  const handleForward = () => {
    swiper.slideNext();
    if (indexActive > 2) {
      return;
    }
    setIndexActive(indexActive + 1);
  };

  useEffect(() => {
    setSwiper(document.querySelector('.swiper').swiper);
  }, []);

  useEffect(() => {
    indexActive === 0 ? setIconDisabledLeft(true) : setIconDisabledLeft(false);
    indexActive > 2 ? setIconDisabledRight(true) : setIconDisabledRight(false);
  }, [indexActive]);

  return (
    <div className="live-auctions">
      <HomeNav navName="Live Auction" />
      <Swiper
        className="swiper"
        spaceBetween={30}
        slidesPerView={4}
        scrollbar={{ draggable: true }}
      >
        {liveAuctionsData.map((item, index) => (
          <SwiperSlide key={index}>
            <LiveAuction showPriceBid={true} showCountDown={true} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
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
            key={index}
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
