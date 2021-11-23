import React, { useContext } from 'react'
import CryptoContext from '../../context/crypto/CryptoContext';
import './crypto-graph-button.styles.scss';


const CryptoGraphButton = (props, value, name) => {
  const { getCryptoHistory } = useContext(CryptoContext);
  const handleClick = (e) => {
    getCryptoHistory(props.name, props.value)
  }

  return (
    <span className="crypto-graph-button" onClick={handleClick} value={props.value} name={props.name}>
      {props.children}
    </span>
  )
}

export default CryptoGraphButton