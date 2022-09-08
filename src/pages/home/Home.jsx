import HomeSlide from '../../components/homeSlide/HomeSlide';
import LiveAuctionsContainer from '../../components/liveAuctions/LiveAuctionsContainer';
import TopSeller from '../../components/topSeller/TopSeller';
import TodayPicks from '../../components/todayPicks/TodayPicks';
import PopularCollections from '../../components/popularCollection/PopularCollections';
import YourNFTs from '../../components/yourNFTs/YourNFTs';
import Footer from '../Footer/Footer';
import './home.style.scss';

const Home = () => {
  return (
    <div className="container">
      <HomeSlide />
      <LiveAuctionsContainer />
      <TopSeller />
      <TodayPicks />
      <PopularCollections />
      <YourNFTs />
      <Footer />
    </div>
  );
};

export default Home;
