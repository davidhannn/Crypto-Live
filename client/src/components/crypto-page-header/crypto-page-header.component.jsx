import React from 'react'

import './crypto-page-header.styles.scss'

const CryptoPageHeader = ({ data }) => {
  const { id, name, symbol, description, link, image, market_cap_rank } = data;
  return (
    <div className="crypto-page-header-container">
      <img src={image.small} />
      <div className="crypto-page-header-name">
        <h2>{name}</h2>
        <p>{symbol}</p>
      </div>
    </div>
  )
}

export default CryptoPageHeader