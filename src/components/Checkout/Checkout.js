import React from 'react';
import './Checkout.css';
import { useStateValue } from '../../context/StateProvider';
import Subtotal from '../Subtotal/Subtotal';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import FlipMove from 'react-flip-move';

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='checkout'>
      {/* 🤔 Start of the left side of the container */}
      <div className='checkout__left'>
        <img
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='amazon-ad'
        />
        <div>
          <h3>Hello, {user?.email}</h3>

          <h2 className='checkout__title'>Your shopping Basket</h2>
          {/* The counter part to this flipMove is in CheckOutProduct */}
          <FlipMove typeName={null}>
            {basket.map((item, index) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
        </div>
      </div>
      {/*😆 End of the  Left side of our container */}

      {/*🔰 Start of the right side of the the container */}
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
