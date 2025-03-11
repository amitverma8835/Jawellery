import React from 'react';
import './Products.css';
import { useNavigate } from 'react-router-dom';
import Neck from '../../assets/neck.jpg'
import Bracelet from '../../assets/bracelet.webp'
import Ring from '../../assets/ring.jpg'

function Products() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className='products'>
      <div className="head">
        <h1>OUR PRODUCTS</h1>
      </div>

      <div className="product">
        <div className="product-box">
          <img src={Bracelet} alt="" />
          <span>Bracelet</span>
          <button onClick={() => handleNavigate('/bracelet')}>See More</button>
        </div>

        <div className="product-box">
          <img src={Ring} alt="Connect Internet" />
          <span>Ring</span>
          <button onClick={() => handleNavigate('/ring')}>See More</button>
        </div>

        <div className="product-box">
          <img src={Neck} alt="" />
          <span>Necklace</span>
          <button onClick={() => handleNavigate('/neckless')}>See More</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
