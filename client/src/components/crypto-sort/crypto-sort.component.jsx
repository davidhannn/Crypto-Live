import React, { useContext } from 'react';
import CryptoContext from '../../context/crypto/CryptoContext.js';

import './crypto-sort.styles.scss';

const CryptoSort = () => {
  const { sortCryptoData } = useContext(CryptoContext);

  const handleChange = (e) => {
    console.log(e.target.value)
    sortCryptoData(e.target.value)
  }

  return (
    <select className="select-dropdown" onChange={handleChange}>
      <option value="market_cap_desc">Market Cap Desc</option>
      <option value="market_cap_asc">Market Cap Asc</option>
      <option value="volume_desc">Volume Desc</option>
      <option value="volume_asc">Volume Asc</option>
    </select>
  )
}

export default CryptoSort;