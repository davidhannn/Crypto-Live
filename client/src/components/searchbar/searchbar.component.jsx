import React, { useState} from 'react';
import './searchbar.styles.scss';

const SearchBar = () => {
  const [search, setSearch] = useState('')


  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form className="search-bar-form">
        <input type="text" name="search" value={search} onChange={handleChange} className="search-bar" placeholder="Search Coins"/>
    </form>
  )
}

export default SearchBar