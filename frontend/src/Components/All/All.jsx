import React, { useState, useEffect } from 'react';
import Data from '../../../Data.json';
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../../redux/cartSlice';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



function All() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(4);
  const navigate = useNavigate()

  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth > 1200) setCardsPerPage(4);
      else if (window.innerWidth > 800) setCardsPerPage(4);
      else if (window.innerWidth > 500) setCardsPerPage(4);
      else setCardsPerPage(4);
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(Data.length / cardsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNavigate = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="ring-box">
      <h1>All Products</h1>
      <div className="ring">
        {Data.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage).map((filteredItem, index) => (
          <div key={filteredItem.id || index} className="card">  
            <img src={filteredItem.img} alt={filteredItem.name} />
            <h3>{filteredItem.name}</h3>
            <p>Price: ₹{filteredItem.price}</p>
            <p className="p2">{filteredItem.about}</p>
            <button 
              className="buy-btn" 
              onClick={() => {
                dispatch(AddItem({
                  name: filteredItem.name,
                  image: filteredItem.img,
                  price: filteredItem.price,
                  id: filteredItem.id,
                  about: filteredItem.about
                }));
                alert("Product Added Successfully");
              }}
            >
              <span><FiShoppingCart /></span> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="pagination">
        <button onClick={prevPage} className="prev-btn" disabled={currentPage === 0}><FaArrowLeft/></button>
        <span> Page {currentPage + 1} of {totalPages} </span>
        <button onClick={nextPage} className="next-btn" disabled={currentPage === totalPages - 1}><FaArrowRight/></button>
      </div>

      <div className='home-btn'>
        <button onClick={()=>handleNavigate()}>Back Home</button>
      </div>


      <Footer />
    </div>
  );
}

export default All;
