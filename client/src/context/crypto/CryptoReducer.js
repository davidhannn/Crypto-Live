import {
  GET_CRYPTO_LIST,
  GET_CRYPTO_DATA,
  GET_CRYPTO_HISTORY,
  SORT_CRYPTO_DATA,
  SEARCH_CRYPTO_DATA,
  GET_CRYPTO_FAVORITES
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
    case SORT_CRYPTO_DATA:
          return {
            ...state,
            cryptoList: action.payload
        }
    case SEARCH_CRYPTO_DATA:
          return {
            ...state,
            cryptoSearchList: action.payload
        }
    case GET_CRYPTO_FAVORITES:
          return {
            ...state,
            cryptoList: state.cryptoList.filter((crypto) => action.payload.indexOf(crypto.id) !== -1)
        }
    default:
      return state
  }
}