import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material'
import { db } from '../../firebase/firebase.js';

const FavoriteIcon = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [favorite, setFavorite] = useState()

  const favoritesRef = db.collection('favorites').doc(user.uid)

  const handleClick = async () => {
    favoritesRef.get().then((doc) => {
      if (doc.exists)
        return doc.ref.update({
          [id]: !doc.data()[id]
        })
    })
      // set(
      // {[id]: true },
      // {merge: true})
    // await db.setDoc(db.doc(db, "favorites", user.uid), {
    //   id: true
    // });
  }

  // console.log(user.uid);

  return (
    <IconButton>
        <FavoriteBorderIcon onClick={handleClick}/>
    </IconButton>
  )
}

export default FavoriteIcon