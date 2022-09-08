import React from 'react';
import './popularCollection.scss';
import popularCollectionData from '../../data/popularCollection';
import HomeNav from '../HomeNav';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckIcon from '@mui/icons-material/Check';

const PopularCollection = ({ item }) => {
  return (
    <div className="popular-collection">
      <div className="popular-collection-bottom">
        <div className="popular-collection-content">
          <div className="avatar">
            <img src={item.author.avatar} alt="" />
            <span className="avatar-icon">
              <CheckIcon className="check-icon" />
            </span>
          </div>
          <div>
            <a href="/" className="card-name">
              {item.name}
            </a>
            <div className="card-info">
              <span>Created by</span>
              <a href="/">{item.author.name}</a>
            </div>
          </div>
        </div>
        <a href="/" className="popular-collection-heart">
          <FavoriteBorderIcon />
          <span>{item.love_count}</span>
        </a>
      </div>
      <div className="popular-collection-img">
        <img src={item.image_1} alt="" className="left-img" />
        <div className="right-img">
          <div className="top-img">
            <img src={item.image_2} alt="" />
            <img src={item.image_3} alt="" />
          </div>
          <img src={item.image_4} alt="" className="bottom-img" />
        </div>
      </div>
    </div>
  );
};

const PopularCollections = () => {
  return (
    <div className="popular">
      <HomeNav navName="Popular Collection" />
      <div className="popular-collection-list">
        {popularCollectionData.map((item, index) => (
          <PopularCollection key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularCollections;
