import { useEffect, useState } from 'react';
import './topSeller.scss';
import 'swiper/css';
import topSellerData from '../../data/topSeller';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SellerItem from './SellerItem';

const TopSeller = () => {
  const [swipe, setSwipe] = useState();
  const [isEnded, setIsEnded] = useState();
  const handlerPrev = () => {
    swipe.slidePrev();
  };

  const handlerNext = () => {
    swipe.slideNext();
  };

  useEffect(() => {
    setSwipe(document.querySelector('.top-seller-swipe').swiper);
  }, []);

  return (
    <div className="top-seller">
      <div className="top-seller-title">
        <h2>Top Seller</h2>
        <div className="top-seller-btn">
          <NavigateBeforeIcon
            className={
              swipe?.isBeginning
                ? 'top-seller-btn-icon disabled'
                : 'top-seller-btn-icon'
            }
            onClick={handlerPrev}
          />
          <NavigateNextIcon
            className={
              swipe?.isEnd
                ? 'top-seller-btn-icon disabled'
                : 'top-seller-btn-icon'
            }
            onClick={handlerNext}
          />
        </div>
      </div>
      <Swiper
        className="top-seller-swipe"
        spaceBetween={30}
        slidesPerView={9}
        scrollbar={{ draggable: true }}
        onSlideChange={() => {
          setIsEnded(!isEnded);
        }}
      >
        {topSellerData.map((item, index) => (
          <SwiperSlide key={index}>
            <SellerItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSeller;
