import React, { useState, useContext, useEffect } from 'react';
import CryptoContext from '../../context/crypto/CryptoContext.js';
import { Link, useRouteMatch } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.styles.scss';

const SearchBar = () => {
  const { searchCrypto, cryptoSearchList  } = useContext(CryptoContext)
  const [search, setSearch] = useState('')
  const [searchedVal, setSearchedVal] = useState([]);

  useEffect(() => {
    searchCrypto()
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
    setSearchedVal(cryptoSearchList.filter((crypto) => crypto.id.toLowerCase().includes(e.target.value.toLowerCase())))
    // console.log(val)
    if (e.target.value == '') {
      setSearchedVal([])
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCrypto(search)
  }

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <i className="search-icon">

          </i>
          <input type="text" name="search" value={search} onChange={handleChange} className="search-bar"  />
          <SearchIcon style={{ fill: "#47c2be"}}/>
        </div>
        <div className="option-container-main" onClick={() => setSearchedVal([])}>
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
        </div>
    </form>
  )
}

export default SearchBar