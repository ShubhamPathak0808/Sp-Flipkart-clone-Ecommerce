import axios from "axios";  // Axios is used to fetch data--as from an api
import *as actionTypes from "../constants/productConstants"
// const URL = "http://localhost:8000"; //url of backend
const URL = ''; //url of backend for production kept empty automatically gets fill

export const getProducts = ()=>  async (dispatch) => {       // this is a middleware
        try {
            // const response = await axios.get(`${URL}/products`)
            const response = await axios.get(`${URL}/products`)
            // ab backend se jo response aaega wo kuch object ke form me hota hai jisme 
            //config:{},data:[],headers:{},status:200,message:"" 
            //-> to get data we have two methods obj.data or {data} = obj->object destructuring

            dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: response.data })

            //whenever we call dispatch it calls the Reducer
            //with action having { type: actionTypes.GET_PRODUCTS_SUCCESS, payload:data} whole data
        } catch (error) {
            dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error })
            // console.log("err while caliing getProducts api", error);
        }
    
}

export const getProductDetails = (id)=>async (dispatch) =>{  
    try {
        // dispatch({type: actionTypes.GET_PRODUCT_DETAILS_REQUEST});
        const response = await axios.get(`${URL}/product/${id}`);
        dispatch({type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,payload:response.data});

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error })
        // console.log("err while caliing getProductDetails api", error);
    }

}

