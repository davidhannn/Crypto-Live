import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material'
import { db } from '../../firebase/firebase.js';

const FavoriteIcon = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [favorite, setFavorite] = useState(false)

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

  useEffect(() => {
    favoritesRef.onSnapshot((doc) => {
      if (doc.exists && doc.data()[id] === true) {
        setFavorite(true)
      } else {
        setFavorite(false)
      }
      // if (snapshot.docs[id] === true) {
      //   setFavorite(true)
      // } else {
      //   setFavorite(false)
      // }
    })
  }, [])

  return (
    <IconButton>
        { !favorite
        ? <FavoriteBorderIcon onClick={handleClick}/>
        : <FavoriteFilledIcon onClick={handleClick} style={{ fill: "red" }} />
        }
    </IconButton>
  )
}

export default FavoriteIcon