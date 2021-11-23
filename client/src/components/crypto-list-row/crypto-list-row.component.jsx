import React from 'react';
import './crypto-list-row.styles.scss'

const CryptoListRow = ({ data }) => {
  const { id, name, image, current_price, market_cap, market_cap_rank, price_change_24h, price_change_percentage_24h } = data

  return (
    <tr className="crypto-list-row-container">
       <td className="column">
        <img src={image} className="crypto-icon-container" />
         <p style={{ marginLeft: '10px'}}>{name}</p>
         </td>
       <td className="column">${current_price}</td>
       <td className={price_change_24h < 0 ? 'column crypto-status active' : 'column crypto-status'}>{price_change_24h.toFixed(2)}</td>
       <td className="column">{price_change_percentage_24h.toFixed(2)}</td>
    </tr>
  )
}

export default CryptoListRow