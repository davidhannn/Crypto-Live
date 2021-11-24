import React, { useContext, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import CryptoContext from '../../context/crypto/CryptoContext';
import CryptoListRow from '../crypto-list-row/crypto-list-row.component.jsx'
import CryptoSVG from '../crypto-svg/crypto-svg.component.jsx'
import CryptoSort from '../crypto-sort/crypto-sort.component.jsx'
import SearchBar from '../searchbar/searchbar.component.jsx';

import './crypto-list.styles.scss';

const CryptoList = () => {
  const { cryptoList } = useContext(CryptoContext)
  // let match = useRouteMatch();
  // useEffect(() => {

  // }, [cryptoList])

    if (cryptoList.length === 0) {
      return <p>...Loading</p>
    } else {
    return (
      <div className="crypto-list-container">
        <CryptoSVG />
        <div className="crypto-list-header-row">
          <SearchBar />
          <CryptoSort />
        </div>

      <table className="crypto-list-table">
        <thead>
          <tr className="crypto-list-row-container">
            <th className="column">Coin</th>
            <th className="column">Price</th>
            <th className="column">Price Change (24H)</th>
            <th className="column">Price Change % (24H)</th>
          </tr>
        </thead>
        <tbody>
        {cryptoList && cryptoList.map((coin) => (
          <Link to={`/${coin.id}`} style={{ textDecoration: 'none'}}>
            <CryptoListRow data={coin} key={coin.id}/>
          </Link>
        ))}
        </tbody>
      </table>
      </div>
    )
  }
}

export default CryptoList