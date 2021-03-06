import React, { forwardRef } from 'react';
import { useStateValue } from '../../context/StateProvider';
import './CheckoutProduct.css';

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket, user }, dispatch] = useStateValue();

    const removeFromBasket = () => {
      // Remove item from the basket
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      });
    };

    return (
      <div ref={ref} className='checkoutProduct'>
        <img
          className='checkoutProduct__image'
          src={image}
          alt='checkoutProduct'
        />
        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title}</p>
          <p className='checkoutProduct__price'>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className='checkoutProduct__rating'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket} style={{ cursor: 'pointer' }}>
              Remove from Basket
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
