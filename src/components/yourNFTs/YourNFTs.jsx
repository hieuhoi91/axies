import './yourNFTs.scss';

import yourNFTsData from '../../data/yourNFTs';

const YourNFT = ({ item, colorNumber }) => {
  return (
    <div className="box-icon">
      <div className={'icon color-' + colorNumber}>
        <img src={item.icon} alt="" />
      </div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
};

const YourNFTs = () => {
  return (
    <div className="your-nft">
      {yourNFTsData.map((item, number) => (
        <YourNFT key={number} item={item} colorNumber={number + 1} />
      ))}
    </div>
  );
};

export default YourNFTs;
