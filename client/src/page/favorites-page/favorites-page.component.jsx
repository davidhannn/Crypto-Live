import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/auth/AuthContext';
import CryptoContext from '../../context/crypto/CryptoContext';
import CryptoList from '../../components/crypto-list/crypto-list.component.jsx'
import { db } from '../../firebase/firebase.js';

// const url = 'https://api.coingecko.com/api/v3/coins'

const FavoritesPage = () => {
  const { user } = useContext(AuthContext);
  const { getCryptoFavorites } = useContext(CryptoContext);
  const [favorites, setFavorites] = useState([]);
  // const [favoriteData, setFavoriteData] = useState(null)
  // const favoritesRef = db.collection('favorites').doc(user.uid);
  // const favoritesQuery = db.collection('favorites').doc(user.uid);



  useEffect(() => {
    // const getFavorites = async () => {
    //   await favoritesRef.get().then((doc) => {
    //     if (doc.exists) {
    //       const list = Object.keys(doc.data()).filter(key => doc.data()[key] === true)
    //       setFavorites(list)
    //     }
    //   })
    // }

    // const fetchData = async () => {
    //   const apiPromises = await favorites.map((favorite) => {
    //     return axios.get(`${url}/${favorite}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`)
    //   })

    //   await Promise.all(apiPromises).then((values) => {
    //     const data = values.map((value) => value.data)
    //     setFavoriteData(data)
    //   })
    // }
    // getFavorites();
    getCryptoFavorites(user.uid)
    // fetchData()
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