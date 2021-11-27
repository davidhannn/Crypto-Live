import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import CryptoContext from '../../context/crypto/CryptoContext';
// import CryptoListRow from '../crypto-list-row/crypto-list-row.component.jsx'
import { db } from '../../firebase/firebase.js';

const FavoritesPage = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  const favoritesRef = db.collection('favorites').doc(user.uid);
  // const favoritesQuery = db.collection('favorites').doc(user.uid);

  useEffect(() => {
    favoritesRef.get().then((doc) => {
      if (doc.exists) {
        const list = Object.keys(doc.data()).filter(key => doc.data()[key] === true)
        setFavorites(list)
      }
    })
  }, [])

  return (
      <table className="crypto-list-table">
        <thead>
          <tr className="crypto-list-row-container">
            <th className="column">Coin</th>
            <th className="column">Price</th>
            <th className="column">Price Change (24H)</th>
            <th className="column">Price Change % (24H)</th>
            <th className="column favorite"></th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
  )
}

export default FavoritesPage