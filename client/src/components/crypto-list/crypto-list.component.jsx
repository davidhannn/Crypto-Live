import React, { useContext, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import CryptoContext from '../../context/crypto/CryptoContext';
import AuthContext from '../../context/auth/AuthContext';
import CryptoListRow from '../crypto-list-row/crypto-list-row.component.jsx'
import CryptoSVG from '../crypto-svg/crypto-svg.component.jsx'
import CryptoSort from '../crypto-sort/crypto-sort.component.jsx'
import SearchBar from '../searchbar/searchbar.component.jsx';
import FavoriteIcon from '../favorite-icon/favorite-icon.component.jsx'
import Pagination from '../pagination/pagination.component.jsx';

import './crypto-list.styles.scss';

const CryptoList = (props) => {
  const { cryptoList, getCryptoList, cryptoFavorites, getCryptoFavorites, sortCryptoData } = useContext(CryptoContext)
  const { user } = useContext(AuthContext);
  // let match = useRouteMatch();

  useEffect(() => {
    // getCryptoList()
    if (props.setting === 'favorite') {
      console.log('testing')
      getCryptoFavorites(user.uid)
    }
  }, [])

  const handleSort = () => {
    console.log('testing')
    sortCryptoData()
  }

    if (cryptoList.length === 0) {
      return <p>...Loading</p>
    } else {
    return (
      <div className="crypto-list-container">
        <div className="crypto-svg-container">
          <CryptoSVG />
        </div>
        <div className="crypto-list-header-row">
          {/* <SearchBar /> */}
          <CryptoSort />
        </div>

      <table className="crypto-list-table">
        <thead>
          <tr className="crypto-list-row-container">
            <th className="column">Coin</th>
            <th className="column">Price</th>
            <th className="column" onClick={handleSort}>Price Change</th>
            <th className="column">Price Change % </th>
            <th className="column">Market Cap Change</th>
            <th className="column">Market Cap Change %</th>
            <th className="column favorite"></th>
          </tr>
        </thead>
        <tbody>

        {props.setting !== 'favorite' ? cryptoList && cryptoList.map((coin) => (
          <tr className="crypto-list-row-container">
              <CryptoListRow data={coin} key={coin.id}/>
          </tr>
        )): cryptoFavorites && cryptoFavorites.map((coin) => (
          <tr className="crypto-list-row-container">
              <CryptoListRow data={coin} key={coin.id}/>
          </tr>
        ))}
        </tbody>
      </table>

      <Pagination />
      </div>
    )
  }
}

export default CryptoList