import React, { useState, useContext } from 'react';
import CryptoContext from '../../context/crypto/CryptoContext.js';

import './searchbar.styles.scss';

const SearchBar = () => {
  const { searchCrypto } = useContext(CryptoContext)
  const [search, setSearch] = useState('')


  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCrypto(search)
  }

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
        <input type="text" name="search" value={search} onChange={handleChange} className="search-bar" placeholder="Search Coins"/>
    </form>
  )
}

export default SearchBar