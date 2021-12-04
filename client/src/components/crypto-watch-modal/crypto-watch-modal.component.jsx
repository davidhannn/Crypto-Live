import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/auth/AuthContext';
import './crypto-watch-modal.styles.scss';
import CryptoContext from '../../context/crypto/CryptoContext.js';
import SearchIcon from '@mui/icons-material/Search';
import { db } from '../../firebase/firebase.js';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const CryptoWatchModal = () => {
  const { user } = useContext(AuthContext);
  const [displayModal, setDisplayModal] = useState(false)
  const { searchCrypto, cryptoSearchList, getCryptoAlertPrices, cryptoAlerts  } = useContext(CryptoContext)
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
        getCryptoAlertPrices(user.uid);
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

          <i className="search-icon"></i>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
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
                 <p style={{ width: '80px'}}>Set Price</p>
                 <input type="text" name="price" value={form.price} className="modal-row-input" onChange={handleChange}/>
              </div>
              <div className="modal-row">
                 <p style={{ width: '80px'}}>Notes</p>
                 <input type="text" name="notes" value={form.notes} className="search-bar"className="modal-row-input" onChange={handleChange} />
              </div>
              <div className="modal-button-row">
                <button className="modal-button" type="submit">Submit</button>
                <button className="modal-button" className="modal-button"onClick={showModal}>Close</button>
              </div>
            </form>


          </div>


        </div>
          </div>
     }

        <div className="crypto-alert-box-container">
        {cryptoAlerts && cryptoAlerts.map((crypto) => {
          return (
            <div className="crypto-alert-box">
              <div className="crypto-alert-box-left">
                <p>{crypto.coin}</p>
                {crypto.status == 'higher' ?
                <h6>Price above {crypto.price} </h6> :
                <h6>Price below {crypto.price} </h6>}
              </div>
              <div className="crypto-alert-box-right">
                {crypto.status == 'higher' ? <ArrowUpwardIcon style={{ fill: "green"}}/> : <ArrowDownwardIcon style={{ fill: "red"}}/>}
              </div>
            </div>
        )})}
        </div>
    </div>
  )
}
}

export default CryptoWatchModal;