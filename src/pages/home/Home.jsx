import HomeSlide from '../../components/homeSlide/HomeSlide';
import LiveAuctionsContainer from '../../components/liveAuctions/LiveAuctionsContainer';
import './home.style.scss';

const Home = () => {
  console.log('Home');
  return (
    <div className="container">
      <HomeSlide />
      <LiveAuctionsContainer />
    </div>
  );
};

export default Home;
