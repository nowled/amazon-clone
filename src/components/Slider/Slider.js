import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../Home/Home.css';

const image1 =
  'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg';

const image2 =
  'https://images-na.ssl-images-amazon.com/images/I/51GtehXCyOL._AC_SL1000_.jpg';

const image3 =
  'https://images-na.ssl-images-amazon.com/images/I/91KKKqE7gdL._AC_SL1500_.jpg';

const image4 =
  'https://images-na.ssl-images-amazon.com/images/I/71UddJ3JSLL._AC_SL1500_.jpg';

const image5 =
  'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$';
const images = [image1, image2, image3, image4, image5];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: false,
};

const Slider = () => {
  return (
    <div className='home__page'>
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

export default Slider;
