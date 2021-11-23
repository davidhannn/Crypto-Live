import {
  GET_CRYPTO_LIST,
  GET_CRYPTO_DATA
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
    default:
      return state
  }
}