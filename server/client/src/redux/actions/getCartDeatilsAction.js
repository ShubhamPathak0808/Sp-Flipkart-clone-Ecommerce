import axios from "axios"
import * as actionType from "../constants/cartConstants.js"
// const URL = "http://localhost:8000"; //url of backend
const URL = ''; //url of backend for production kept empty automatically gets fill


export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`)
        dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } })
    } catch (error) {
        dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: MessageChannel.error })

    }
}
export const removeFromCart = (id) => async (dispatch) => {
    dispatch({ type: actionType.REMOVE_FROM_CART, payload: id })
}