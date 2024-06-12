import React from 'react';
import data from './data.json';

const getUrlWithParams=(url)=>{
  const params=new URLSearchParams(window.location.search);
  const queryParams=params.toString();
  return `${url}?${queryParams}`;
};

const CasinoList = ({ casinos }) => (
  <div>
    {casinos.map((casino, index) => (
      <div className="casinos" key={index}>
        <div className="sites">
          <a href={getUrlWithParams(casino.website)}>
            <img id="casinoLogo" src={require(`${casino.url}.png`)} alt="casino" />
          </a>
          <div className="triangle">
            <div id="triangle1"></div>
            <div id="triangle2"></div>
            <div id="triangle3"></div>
          </div>
        </div>
        <div className="bonus">
          <p>
            {casino.bonus_type1}
            <br/>
            <b id="bigBonus">{casino.max_bonus_amount}</b>
            <br/>
            {casino.bonus_type2}
          </p>
          <div className="legal">
            <p>UPI & Netbanking Accepted</p>
          </div>
        </div>
        <div className="rating">
          <hr/>
          <img src={require('./Images/casinos/starRating.png')} alt="star rating" />
          <hr/>
          <p>{casino.rating}</p>
          <hr/>
        </div>
        <div className="playNow">
          <a href={getUrlWithParams(casino.website)}>
            <button id="getBonus" type="submit"><span>Get Bonus</span></button>
            <p>{casino.link}</p>
          </a>
        </div>
      </div>
    ))}
  </div>
);

const List = () => (
  <div>
    <CasinoList casinos={data.casinos} />
  </div>
);

export default List;
