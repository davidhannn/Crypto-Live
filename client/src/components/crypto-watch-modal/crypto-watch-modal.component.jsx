import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext';
import './crypto-watch-modal.styles.scss';
import CryptoContext from '../../context/crypto/CryptoContext.js';
import SearchIcon from '@mui/icons-material/Search';
import { db } from '../../firebase/firebase.js';


const CryptoWatchModal = () => {
  const { user } = useContext(AuthContext);
  const [displayModal, setDisplayModal] = useState(false)
  const { searchCrypto, cryptoSearchList  } = useContext(CryptoContext)
  const [form, setForm] = useState({ coin: '', price: 0, notes: ''})
  const [search, setSearch] = useState('')
  const [searchedVal, setSearchedVal] = useState([]);
  const [alertCryptos, setAlertCryptos] = useState(null)
  const showModal = () => {
    setDisplayModal(prev => !prev);
  }

  const alertsRef = db.collection('alerts').doc(user.uid);

  useEffect(() => {
    alertsRef.onSnapshot((doc) => {
      if (doc.exists) {
        console.log(doc.data())
        const arrayOfObj = Object.entries(doc.data()).map((item) => {
            return {
              coin: item[0],
              price: item[1].price,
              notes: item[1].notes
            }
        })
        setAlertCryptos(arrayOfObj)
        // console.log(arrayOfObj)
        // setAlertCryptos(item)
      }
    })
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
    setSearchedVal(cryptoSearchList.filter((crypto) => crypto.id.toLowerCase().includes(e.target.value.toLowerCase())))
    // console.log(val)
    if (e.target.value == '') {
      setSearchedVal([])
    }

  }

  const handleChange = ({ target : { name, value }}) => {
    setForm({ ...form, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    alertsRef.get().then((doc) => {
      if (doc.exists)
        return doc.ref.update({
          [form.coin]: { price: form.price, notes: form.notes }
        })
      else {
        db.collection('alerts').doc(user.uid).set({
          [form.coin]: { price: form.price, notes: form.notes }
        })
      }
    })
  }

  if(!alertCryptos) {
    return <p>...Loading</p>
  } else {
  return (
    <div className="crypto-watch-container">
      <button className="alert-button" onClick={showModal}>Create Alert</button>
      {!displayModal ? null :
        <div className="crypto-watch-modal-container">
          <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Create Alert</h4>
        </div>

        <div className="modal-body">
          <div className="modal-body-header">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
              <i className="search-icon">
              </i>
              <input type="text" name="search" value={search} onChange={handleSearchChange} className="search-bar"  />
              <SearchIcon style={{ fill: "#47c2be"}}/>
            </div>
            <div className="option-container-main" onClick={() => setSearchedVal([])}>
            {searchedVal.map(({ id, image, symbol, name }) => (
              <div className="option-container" onClick={() => {
              setForm({ ...form, coin: id})
              setSearch(id)
             }}>

                <img style={{ height: '35px', width: '35px'}} src={image} />
                <div className="option-container-right">
                  <p>{name}</p>
                  <p>{symbol}</p>
                </div>

              </div>
            ))}
        </div>
              <div className="modal-row">
                 <p>Set Price</p>
                 <input type="text" name="price" value={form.price}onChange={handleChange}/>
              </div>
              <div className="modal-row">
                 <p>Notes</p>
                 <input type="text" name="notes" value={form.notes} onChange={handleChange} />
              </div>
              <button className="modal-button" type="submit">Submit</button>
            </form>

            <button className="modal-button" onClick={showModal}>Close</button>
          </div>
        </div>
          </div>
        </div>}
        <div className="crypto-alert-box-container">
        {alertCryptos && alertCryptos.map((crypto) => (
            <div className="crypto-alert-box">
              <p>{crypto.coin}</p>
              <p>{crypto.price}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
}

export default CryptoWatchModal;