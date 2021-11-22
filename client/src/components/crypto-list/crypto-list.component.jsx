import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

const CryptoList = () => {
  // let match = useRouteMatch();

  return (
    <li>
      <Link to={`/ETC`}>
        <ul>ETC</ul>
      </Link>
    </li>
  )
}

export default CryptoList