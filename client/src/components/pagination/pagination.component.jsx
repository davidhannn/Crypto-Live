import React, { useState, useContext } from 'react';
import './pagination.styles.scss';
import CryptoContext from '../../context/crypto/CryptoContext';

const Pagination = () => {
  const [next10Page, setNext10Page] = useState(10);
  const { getCryptoList } = useContext(CryptoContext)

  const handleClick = (e) => {
    getCryptoList(e.target.textContent)
  }

  const handlePageChange = (e) => {
    let leftOrRight = e.target.getAttribute("data-id")
    if (leftOrRight == 'left') {
      setNext10Page(prev => prev - 10)
    } else {
      setNext10Page(prev => prev + 10)
    }
    //   if (next10)

  }

  return (
    <div className="pagination-row">
       { next10Page == 10 ? null : <div><i class="arrow left" data-id="left" onClick={handlePageChange}></i></div> }
        {[...Array(next10Page)].map((button, i) => {
          if (i <= next10Page && i >= next10Page - 10) {
          return <span className="crypto-graph-button" name={i+1} onClick={handleClick}>{i + 1}</span>
          }
        })}
        <p><i class="arrow right" data-id="right" onClick={handlePageChange}></i></p>
    </div>
  )
}

export default Pagination;