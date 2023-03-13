import * as actionType from "../constants/cartConstants.js"

export const getCartDeatilsReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:

      const item = action.payload;
      const exist = state.cartItems.find(product => product.id === item.id) //checking if product exist

      if (exist) {
        return { ...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data) }
      }
      else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }

    case actionType.REMOVE_FROM_CART:
      //filter function ka use karege
      return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) }
    default:
      return state;
  }
}