import React from 'react';
import './Home.css';
import Product from '../Product/Product';
import { v4 as uuidv4 } from 'uuid';
import 'react-slideshow-image';

/**
 * https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
 * @
 *
 * http://pngimg.com/uploads/computer_pc/computer_pc_PNG17490.png
 */

const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
          alt='amazon-hero'
        />
        <div className='home__row'>
          <Product
            id={uuidv4()}
            title='Dell OptiPlex 24 7000 Series 7460 23.8" Full HD All-in-One Desktop - 8th Gen Intel 6-Core i5-8500 Processor up to 4.10 GHz, 16GB RAM, 512GB SSD + 2TB.'
            price={1158.0}
            image='https://images-na.ssl-images-amazon.com/images/I/71btK4KS81L._AC_SL1500_.jpg'
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
            title='New Apple iMac with Retina 4K Display (21.5-inch, 8GB RAM, 256GB SSD Storage)'
            price={1435.95}
            image='https://images-na.ssl-images-amazon.com/images/I/918idkuRlzL._AC_SL1500_.jpg'
            rating={5}
          />
          <Product
            id={uuidv4()}
            title='New Apple iMac Pro (27-inch, 3.0GHz 10-core Intel Xeon W Processor, 32GB RAM, 1TB SSD)'
            price={5000.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71PDNyTXIzL._AC_SL1500_.jpg'
            rating={3}
          />
          <Product
            id={uuidv4()}
            title='New Apple Mac Mini with Apple M1 Chip (8GB RAM, 512GB SSD Storage) - Latest Model
                Capacity:512GB'
            price={900.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71pcTYT%2BICL._AC_SL1500_.jpg'
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
