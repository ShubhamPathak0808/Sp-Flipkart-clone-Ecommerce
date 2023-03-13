import express, { Router } from "express"; // if we are using ES6 we have to enter "type":"module"in pakage.json 
import dotenv from "dotenv";
import Connection from "./database/mongoCloud.js"; //extension is must for server side
import homeProductData_In_productSchema from "./database/modols-schema/homeProductSchema.js"
import bodyParser from "body-parser";
import router from "./routes/route.js"
import cors from "cors";
import { Path } from "mongoose";
import {v4 as uuid} from "uuid"

dotenv.config();
const app = express();
app.use(cors()); // integrating cors with express
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router);

//getting .env constants
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL || `mongodb+srv://${USERNAME}:${PASSWORD}@flipkartcloneecommerce.ufytvzz.mongodb.net/?retryWrites=true&w=majority`

//establishing connection with DataBase
Connection(URL);

//static file
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

// //production level code for deployment
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
// }

homeProductData_In_productSchema();

app.listen(PORT,(err)=>{
    if(err){
        console.log("error in the app.listen");
    }
    else{
        console.log(`app running successfully on port ${PORT}`);
    }
})

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams ={};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['CALLBACK_URL'] = '/callback'
paytmParams['EMAIL'] = 'shubhampathak0809@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'


