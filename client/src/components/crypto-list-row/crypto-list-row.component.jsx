import React from 'react';

const CryptoListRow = ({ data }) => {
  const { id, name, image, current_price, market_cap, market_cap_rank } = data

  return (
    <div className="crypto-list-row-container">
       <img src={data.image} />
       <p>{data.name}</p>
    </div>
  )
}

export default CryptoListRow