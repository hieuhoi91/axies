import HomeSlide from '../../components/homeSlide/HomeSlide';
import LiveAuctionsContainer from '../../components/liveAuctions/LiveAuctionsContainer';
import TopSeller from '../../components/topSeller/TopSeller';
import TodayPicks from '../../components/todayPicks/TodayPicks';
import PopularCollections from '../../components/popularCollection/PopularCollections';
import './home.style.scss';

const Home = () => {
  console.log('Home');
  return (
    <div className="container">
      <HomeSlide />
      <LiveAuctionsContainer />
      <TopSeller />
      <TodayPicks />
      <PopularCollections />
    </div>
  );
};

export default Home;
