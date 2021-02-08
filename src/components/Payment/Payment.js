import React from 'react';
import { useStateValue } from '../../context/StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>3421 Spruce</p>
            <p>Inkster Michigan</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                item={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__detail'>
            {/* Stripe shit will go down here! */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
