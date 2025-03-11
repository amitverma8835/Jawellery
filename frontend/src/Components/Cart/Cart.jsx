import React from 'react';
import './Cart.css';
import CartCard from '../CartCard/CartCard';
import { useSelector } from 'react-redux';
import ec from '../../assets/empty-cart.png'
import { useNavigate } from 'react-router-dom';

function Cart() {
  const items = useSelector((state) => state);
  let total = items.cart.reduce((a,b)=>a+b.price,0)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className='cart'>
      {items.cart.length <= 0 ? (
        <div className='empty-cart'>
          <img src={ec} alt="Empty Cart" />
          <h1>Empty Cart</h1>
          <button onClick={()=>handleNavigate()}>Back To Home</button>
        </div>
      ) : (
        <div className="cartCart-section">
          {items.cart.map((item) => (
            <CartCard
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              about={item.about}
            />


          ))}

          <div className="price-section">
            <span>Total Products : {items.cart.length}</span>
            <span>Total Price : {total}₹ </span>

          </div>

          <button onClick={()=>navigate('/order-form')}>Order Product</button>
        </div>

      )}
    </div>
  );
}

export default Cart;
