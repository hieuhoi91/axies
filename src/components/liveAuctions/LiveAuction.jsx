import { useState, useEffect } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <span>Coming Soon</span>
    </div>
  );
};
const CardBottom = () => {
  return (
    <div className="card-price-bid-button-bottom">
      <div className="card-bag">
        <span>
          <LocalMallIcon className="card-bag-icon" />
        </span>
        <span>Place Bid</span>
      </div>
      <a href="/" className="card-reset">
        <RestartAltIcon className="card-reset-icon" />
        <span>View History</span>
      </a>
    </div>
  );
};

const CountDownTimer = ({ countdownTime }) => {
  const [date, setDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + countdownTime);

    return d;
  });
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  useEffect(() => {
    setInterval(() => {
      CountDownTimer();
    }, 1000);
  }, []);
  return (
    <div className="auction-countdown">
      <LocalFireDepartmentIcon className="icon-fire" />
      <span>{`${countdown?.days}:${countdown?.hours}:${countdown?.minutes}:${countdown?.seconds}`}</span>
    </div>
  );
};

const LiveAuction = ({
  showCountDown,
  showBottom,
  item,
  showComingSoon,
  showPriceBid,
}) => {
  const [isShowPriceBid, setShowPriceBid] = useState(false);

  return (
    <div
      className="live-auction"
      onMouseEnter={() => setShowPriceBid(true)}
      onMouseLeave={() => setShowPriceBid(false)}
    >
      <div className="auction-img">
        <img src={item.image} alt="" />
        <a href="/" className="auction-heart">
          <FavoriteBorderIcon />
          <span>{item.count_love}</span>
        </a>
        {showComingSoon && <ComingSoon />}
        {showCountDown && <CountDownTimer countdownTime={item.count_down} />}
        {isShowPriceBid && showPriceBid && (
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
      {showBottom && <CardBottom />}
    </div>
  );
};

export default LiveAuction;
