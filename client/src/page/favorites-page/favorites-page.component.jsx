import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/auth/AuthContext';
import CryptoContext from '../../context/crypto/CryptoContext';
import CryptoList from '../../components/crypto-list/crypto-list.component.jsx'
import { db } from '../../firebase/firebase.js';

const FavoritesPage = () => {
  const { user } = useContext(AuthContext);
  const { getCryptoFavorites } = useContext(CryptoContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getCryptoFavorites(user.uid)
  }, [])

  if (favorites == null) {
    return <p>...Loading</p>
  } else {
  return (
      <CryptoList />
  )
  }
}

export default FavoritesPage