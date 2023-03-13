import axios from "axios";  // Axios is used to fetch data--as from an api
// const URL = "http://localhost:8000"; //url of backend
const URL = ''; //url of backend for production kept empty automatically gets filled
export const authenticateSignup = async function(data){ //async-await instead of promises
    try {                        
       return await axios.post(`${URL}/signUp`,data)    //post as data is comming from signUp form (userData) as post method
    } catch (error) {
        // console.log("error by calling signUp api",error);
    }
    // console.log("sent from the frontend");
}

export const authenticateLogIn = async function(data_login_details){
    try {
        return await axios.post(`${URL}/logIn`,data_login_details);
    } catch (error) {
        // console.log("error while calling logIn api",error);
    }
    // console.log("sent from the frontend");
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error', error);
    }
}