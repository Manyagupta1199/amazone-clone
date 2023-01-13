import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__conatiner'>
        <img
        className='home__image'
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/PC_Hero_3000x1200._CB643589305_.jpg"
        alt =""
        />
        <div className='home__row'>
          <Product id = "1000001" title = "The Lean Startup: How constant innovation creates radically Successful Businesses Paperback" price = {29.99} image= 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' rating= {5}/>
          <Product id = "100002"  title = "Kuvings EVO700 Dark Silver with Strainers" price= {17.2} image="https://m.media-amazon.com/images/I/41T6aC6eOvL._AC_UF226,226_FMjpg_.jpg" rating={4}/>
        </div>
        <div className='home__row'>
          <Product id = "108291" title = " Layers Trevi Cotton Rich 120 TC Double Bedsheet Set " price = {14} image= "https://m.media-amazon.com/images/I/61ybGhnmG1L._SX569_.jpg" rating = {4}/>
          <Product id = "20393" title = "Webelkart Premium Plastic Designer Stones Ganesha Wall Clock (Copper, 12 Inch)" price = {33.3} image = "https://m.media-amazon.com/images/I/81Dztt32ojL._AC_UL480_FMwebp_QL65_.jpg" rating = {5}/>
          <Product id = "2229a1" title= "Rainflow Water Tank Filter | Y-Type Screen Filter Also for drip Irrigation| 120 Mesh/130 Micron | 6 Months Warranty | Made in India (1 Inch | 25 mm)(Quantity 1 Pc)" price= {27.3} image= "https://m.media-amazon.com/images/I/71D6qO1mWHL._SX466_.jpg" rating ={3}/>
        </div>
        <div className='home__row'>
          <Product id = "23415" title = "Amazon Brand - Umi. Premium 2 Kg Beans for Bean Bag Filling - Sun White (2 kg Beans - 1400 Grams net Weight as per Indian Standards)" price= {20} image="https://m.media-amazon.com/images/I/51xZAdjXMES._SX679_.jpg" rating ={4}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
