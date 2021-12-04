import React, { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../../context/auth/AuthContext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material'
import { db } from '../../firebase/firebase.js';
import './favorite-icon.styles.scss';

const FavoriteIcon = ({ id }) => {
  const { user } = useContext(AuthContext);
  const [favorite, setFavorite] = useState(false)
  const notifyFav = () => toast(`Added ${id} to Favorites`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'toasty-background'
    })

    const notifyRemove = () => toast(`Removed ${id} from Favorites`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: 'toasty-background'
      })


  const favoritesRef = db.collection('favorites').doc(user.uid)

  const handleClick = async () => {
    // notify()
    favoritesRef.get().then((doc) => {
      if (doc.exists) {
        if(!doc.data()[id]) {
          notifyFav()
        } else  {
          notifyRemove()
        }
        return doc.ref.update({
          [id]: !doc.data()[id]
        })
      }
      else {
        db.collection('favorites').doc(user.uid).set({
          [id]: true
        })
      }
    })
  }

  useEffect(() => {
    favoritesRef.onSnapshot((doc) => {
      if (doc.exists && doc.data()[id] === true) {
        setFavorite(true)
      } else {
        setFavorite(false)
      }
    })
  }, [])

  return (
    <IconButton>
        { !favorite
        ? <FavoriteBorderIcon onClick={handleClick} style={{ fill: "#47c2be"}}/>
        : <FavoriteFilledIcon onClick={handleClick} style={{ fill: "#47c2be" }} />
        }
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
    </IconButton>
  )
}

export default FavoriteIcon