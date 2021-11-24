import React, { useState, useContext } from 'react';
import CryptoContext from '../../context/crypto/CryptoContext.js';

import './searchbar.styles.scss';

const SearchBar = () => {
  const { searchCrypto } = useContext(CryptoContext)
  const [search, setSearch] = useState('')


  const handleChange = async (e) => {
    await setSearch(e.target.value)
    searchCrypto(search)
  }

  return (
    <form className="search-bar-form">
        <input type="text" name="search" value={search} onChange={handleChange} className="search-bar" placeholder="Search Coins"/>
    </form>
  )
}

export default SearchBar