import { useState, useEffect } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const LiveAuction = ({ item }) => {
  const [isShowPriceBid, setSHowPriceBid] = useState();
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + item.count_down);

    return d;
  });
  const [countdown, setCountdown] = useState();

  function CountDownTimer() {
    var end = new Date(date);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var now = new Date();
    var distance = end - now;
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    const c = {
      days,
      hours,
      minutes,
      seconds,
    };
    setCountdown(c);
    return c;
  }
  const handlerShowPriceBid = () => {
    setSHowPriceBid(!isShowPriceBid);
  };

  useEffect(() => {
    setCountdown({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setInterval(() => {
      CountDownTimer();
    }, 1000);
  }, []);

  return (
    <div
      className="live-auction"
      onMouseEnter={handlerShowPriceBid}
      onMouseLeave={handlerShowPriceBid}
    >
      <div className="auction-img">
        <img src={item.image} alt="" />
        <a href="/" className="auction-heart">
          <FavoriteBorderIcon />
          <span>{item.count_love}</span>
        </a>
        <div className="auction-countdown">
          <LocalFireDepartmentIcon className="icon-fire" />
          <span>{`${countdown?.days}:${countdown?.hours}:${countdown?.minutes}:${countdown?.seconds}`}</span>
        </div>
        {isShowPriceBid && (
          <div className="auction-price-bid-button">
            <span>
              <LocalMallIcon className="icon-bag" />
            </span>
            <span>Place Bid</span>
          </div>
        )}
      </div>
      <div className="auction-title">
        <a href="/" className="auction-name">
          {item.name}
        </a>
        <div className="auction-tag">BSC</div>
      </div>
      <div className="auction-meta-info">
        <div className="auction-author">
          <img src={item.creator.avatar} alt="" />
          <div className="auction-info">
            <span>Creator</span>
            <a href="/">{item.creator.name}</a>
          </div>
        </div>
        <div className="auction-price">
          <span>Current Bid</span>
          <h5>
            {item.price.value} {item.price.coin_name}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
//
