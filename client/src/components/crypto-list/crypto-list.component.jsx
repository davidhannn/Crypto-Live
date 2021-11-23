import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import CryptoContext from '../../context/crypto/CryptoContext';
import CryptoListRow from '../crypto-list-row/crypto-list-row.component.jsx'

import './crypto-list.styles.scss';

const CryptoList = () => {
  const { cryptoList } = useContext(CryptoContext)
  // let match = useRouteMatch();

    if (cryptoList.length === 0) {
      return <p>...Loading</p>
    } else {
    return (
      <div className="crypto-list-table">
        {cryptoList && cryptoList.map((coin) => (
          // <Link to={`/${coin.id}`} style={{ textDecoration: 'none'}}>
            <CryptoListRow data={coin} key={coin.id}/>
            // <p>{coin.id}</p>
          // </Link>
        ))}
      </div>
    )
  }
}

export default CryptoList