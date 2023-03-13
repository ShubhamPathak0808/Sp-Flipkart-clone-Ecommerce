import express from "express";
import userSignup  from "../controller/userController.js";
import userLogIn_controller from "../controller/userLogin_controller.js";
import getProducts,{getProductById} from "../controller/productController.js";
import { paymentController , paymentResponse } from "../controller/paymentController.js";

const router = express.Router();

router.post("/logIn",userLogIn_controller);
router.post("/signUp",userSignup);       //userSign up is nothing but callBack function with req,res
router.get("/products",getProducts);
router.get("/product/:id", getProductById); //get product by id is call back function api is hit

router.post("/payment",paymentController);
router.post("/callback",paymentResponse);

export default router;
