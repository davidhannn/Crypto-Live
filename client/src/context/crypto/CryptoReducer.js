import {
  GET_CRYPTO_LIST
} from '../types';

export default(state, action) => {
  switch(action.type) {
    case GET_CRYPTO_LIST:
      return {
        ...state,
        cryptoList: [...action.payload]
      }
    default:
      return state
  }
}