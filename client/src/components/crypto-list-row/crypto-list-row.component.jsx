import React, { useContext } from 'react';
import './crypto-list-row.styles.scss'
import { Link, useRouteMatch } from 'react-router-dom'

import AuthContext from '../../context/auth/AuthContext';
import FavoriteIcon from '../favorite-icon/favorite-icon.component.jsx'

const CryptoListRow = ({ data }) => {
  const { user } = useContext(AuthContext)
  const { id, name, image, current_price, market_cap_change_percentage_24h, market_cap_change_24h, price_change_24h, price_change_percentage_24h } = data

  return (
    <>
    <Link to={`/${id}`} style={{ textDecoration: 'none'}}>
      <tr className="crypto-list-row-container active">
        <td className="column">
          <img src={image} className="crypto-icon-container" />
          <p style={{ marginLeft: '10px'}}>{name}</p>
          </td>
        <td className="column">${current_price}</td>
        <td className="column">
          <div className={price_change_24h < 0 ? 'crypto-status active' : 'crypto-status'}>${price_change_24h.toFixed(2)}</div>
        </td>
        <td className="column">
        <div className={price_change_24h < 0 ? 'crypto-status active' : 'crypto-status'}>{price_change_percentage_24h.toFixed(2)}%</div>
        </td>
        <td className="column">
        <div className={price_change_24h < 0 ? 'crypto-status active' : 'crypto-status'}>${(market_cap_change_24h/1000000).toFixed(2)} M</div>
        </td>
        <td className="column">
          <div className={price_change_24h < 0 ? 'crypto-status active' : 'crypto-status'}>{market_cap_change_percentage_24h.toFixed(2)}%</div>
        </td>
      </tr>
    </Link>
    { !user ? null : <td className="column favorite"><FavoriteIcon id={id}/></td> }
    </>

  )
}

export default CryptoListRow