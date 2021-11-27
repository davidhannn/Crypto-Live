import React, { useState, useContext, useEffect } from 'react';
import CryptoContext from '../../context/crypto/CryptoContext.js';
import { Link, useRouteMatch } from 'react-router-dom'

import './searchbar.styles.scss';

const SearchBar = () => {
  const { searchCrypto, cryptoSearchList  } = useContext(CryptoContext)
  const [search, setSearch] = useState('')
  const [searchedVal, setSearchedVal] = useState([]);

  useEffect(() => {
    searchCrypto()
  }, [])

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchedVal(cryptoSearchList.filter((crypto) => crypto.id.toLowerCase().includes(e.target.value.toLowerCase())))
    // console.log(val)
    setSearch(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCrypto(search)
  }

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
        <input type="text" name="search" value={search} onChange={handleChange} className="search-bar" placeholder="Search Coins"/>
        {searchedVal.map(({ id, image, symbol, name }) => (
          <Link to={`/${id}`} style={{ textDecoration: 'none'}}>
          <div className="option-container">
            <img style={{ height: '35px', width: '35px'}} src={image} />
            <div className="option-container-right">
              <p>{name}</p>
              <p>{symbol}</p>
            </div>
          </div>
          </Link>
        ))}
    </form>
  )
}

export default SearchBar