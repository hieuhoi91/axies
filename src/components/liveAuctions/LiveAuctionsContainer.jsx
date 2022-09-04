import './liveAuctions.style.scss';
import LiveAuctionsList from './LiveAuctionsList';

const LiveAuctions = () => {
  console.log('Live Auctions');
  return (
    <div className="live-auctions-container">
      <LiveAuctionsList />
    </div>
  );
};

export default LiveAuctions;
