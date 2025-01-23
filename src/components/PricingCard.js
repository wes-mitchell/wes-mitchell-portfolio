import React from 'react';
import './PricingCard.css';
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p className="">- 3 Days -</p>
          <p className="">- 3 pages -</p>
          <p className="">- Featured -</p>
          <p className="">- Responsive Design -</p>
          <p className=""></p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>Premium</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p className="">- 3 Days -</p>
          <p className="">- 3 pages -</p>
          <p className="">- Featured -</p>
          <p className="">- Responsive Design -</p>
          <p className=""></p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
        <div className="card">
          <h3>Business</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p className="">- 3 Days -</p>
          <p className="">- 3 pages -</p>
          <p className="">- Featured -</p>
          <p className="">- Responsive Design -</p>
          <p className=""></p>
          <Link to="/contact" className="btn">
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
