import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='amazon-hero'
        />
        <div className='home__row'>
          <Product
            id={uuidv4()}
            title='BroadLink Smart Home Hub-WiFi Remote Control IR Blaster for Smart Life Home Automation, TV Remote, Works with Alexa, Google Home, IFTTT (RM4 Mini)'
            price={23.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51GtehXCyOL._AC_SL1000_.jpg'
            rating={4}
          />
          <Product
            id={uuidv4()}
            title='Dell New XPS 13 9300 13.4-inch FHD InfinityEdge Touchscreen Laptop (Silver), Intel Core i7-1065G7 10th Gen, 16GB RAM, 512GB SSD.'
            price={1648.99}
            image='https://images-na.ssl-images-amazon.com/images/I/91KKKqE7gdL._AC_SL1500_.jpg'
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id={uuidv4()}
            title='New Apple iPad (10.2-inch, Wi-Fi, 128GB) - Space Gray (Latest Model, 8th Generation)'
            price={598.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71UddJ3JSLL._AC_SL1500_.jpg'
            rating={5}
          />
          <Product
            id={uuidv4()}
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            rating={3}
          />
          <Product
            id={uuidv4()}
            title='Apple iPad Mini, 5th Gen (Wi-Fi, 64GB) - Space Gray (Renewed)'
            price={354.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71zMHkHX6rL._AC_SL1500_.jpg'
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id={uuidv4()}
            title='New Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model) About this item
            Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance
            Get more done with up to 20 hours of battery life, the longest ever in a Mac.'
            price={1300.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
