import React from 'react';
import './crypto-list-row.styles.scss'

const CryptoListRow = ({ data }) => {
  const { id, name, image, current_price, market_cap, market_cap_rank, price_change_24h, price_change_percentage_24h } = data

  return (
    <tr className="crypto-list-row-container">
       <td className="column">
        <img src={image} className="crypto-icon-container" />
         {name}
         </td>
       <td className="column">${current_price}</td>
       <td className={price_change_24h < 0 ? 'crypto-status active' : 'crypto-status'}>{price_change_24h}</td>
       <td>{price_change_percentage_24h}</td>
    </tr>
  )
}

export default CryptoListRow