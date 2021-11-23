import {
  GET_CRYPTO_LIST,
  GET_CRYPTO_DATA,
  GET_CRYPTO_HISTORY
} from '../types';

export default(state, action) => {
  switch(action.type) {
    case GET_CRYPTO_LIST:
      return {
        ...state,
        cryptoList: [...action.payload]
      }
    case GET_CRYPTO_DATA:
      return {
        ...state,
        cryptoData: action.payload
      }
    case GET_CRYPTO_HISTORY:
        return {
          ...state,
          cryptoHistory: action.payload
        }
    default:
      return state
  }
}