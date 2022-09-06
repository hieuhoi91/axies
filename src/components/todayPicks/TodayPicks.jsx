import './todayPicks.scss';

import liveTopPicksData from '../../data/topPicks';

import HomeNav from '../HomeNav';
import LiveAuction from '../liveAuctions/LiveAuction';

const TodayPicks = () => {
  return (
    <div>
      <HomeNav navName="Today's Picks" />
      <div className="today-picks-live-auction-list">
        {liveTopPicksData.map((item, idx) => (
          <LiveAuction
            key={idx}
            item={item}
            showBottom={item.showBottom}
            showComingSoon={item.showComingSoon}
          />
        ))}
      </div>
    </div>
  );
};

export default TodayPicks;
