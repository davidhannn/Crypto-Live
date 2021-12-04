import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/auth/AuthContext';
import CryptoContext from '../../context/crypto/CryptoContext';
import CryptoList from '../../components/crypto-list/crypto-list.component.jsx'
import CryptoWatchModal from '../../components/crypto-watch-modal/crypto-watch-modal.component.jsx'
import { db } from '../../firebase/firebase.js';
import './favorites-page.styles.scss';

const FavoritesPage = () => {
  const { user } = useContext(AuthContext);
  const { getCryptoFavorites, cryptoFavorites } = useContext(CryptoContext);
  const [favorites, setFavorites] = useState([]);

  if (cryptoFavorites == null) {
    return <p>...Loading</p>
  } else {
  return (
    <div className="favorites-page">
        <CryptoList setting="favorite"/>
        <CryptoWatchModal />
    </div>
  )
  }
}

export default FavoritesPage