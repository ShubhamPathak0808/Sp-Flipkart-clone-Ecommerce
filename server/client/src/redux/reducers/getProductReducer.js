import *as actionType from "../constants/productConstants"

const getProductReducer = (state = { products: [] }, action) => {     //  function(currentState,actions)
   switch (action.type) {
      case actionType.GET_PRODUCTS_SUCCESS: return { products: action.payload }
      case actionType.GET_PRODUCTS_FAIL: return { error: action.payload }
      default: return state;

   }
}

export const getProductDetailsReducer = (state={product : {}} , action) =>{   //this time we have single product in form of object i.e default is {}
   switch (action.type){
      case actionType.GET_PRODUCT_DETAILS_REQUEST: 
         return {loading : true}        //handling loading  --> optional
      case actionType.GET_PRODUCT_DETAILS_SUCCESS:
         return {loading : false , product : action.payload}
      case actionType.GET_PRODUCT_DETAILS_FAIL:
         return {loading :false , error : action.payload}
      case actionType.GET_PRODUCT_DETAILS_RESET : 
         return { product : {}}    //reset means make it  initial state empty object {}      
      default:
         return state;   
   }
}

export default getProductReducer;

