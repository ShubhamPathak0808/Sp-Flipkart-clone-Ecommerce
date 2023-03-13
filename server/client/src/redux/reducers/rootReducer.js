import { combineReducers } from "redux";
import { getProductDetails } from "../actions/getProductAction.js";
import getProductReducer, { getProductDetailsReducer } from "./getProductReducer";
import { getCartDeatilsReducer } from "./getCartDeatilsReducer.js";

const rootReducer = combineReducers(           // combineReducers(object_of_reducers_key_value_pairs)
    {
        getProducts:getProductReducer,
        getProductDetails : getProductDetailsReducer,
        getCartDetails: getCartDeatilsReducer
    }
)

export default rootReducer;