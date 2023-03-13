import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";  //for geting things from url
import { getProductDetails } from "../../redux/actions/getProductAction"
import { useNavigate } from "react-router-dom"; // dom ka method to switch tabs
//redux
import { useDispatch, useSelector } from "react-redux";  //useSelector is used for accessing the store 
import { addToCart } from "../../redux/actions/getCartDeatilsAction";
//components
import { DetailInfo } from "./DetailInfo";
//api
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
//mui components
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
//styling
const Wrapper = styled(Box)`
  background-color: #f2f2f2;
`;
const ProductImage = styled('img')({
    height: '65vh',
    margin: '2.5rem 0',
    border: '1px solid #f0f0f0',
    width: '90%'
})
const funcButton = styled(Button)`
`;


const DetailView = function () {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails); //object destructuring

    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductDetails(id));
        }
    }, [dispatch, id, product, loading])       //whenever this parameters will change 

    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);   //quantity ki initaial value 1 hai

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyNow = async () => {                  //iss ke click par pay using paytm wali api kpo call karna hai
        let response = await payUsingPaytm({ amount: 500, email: 'shubhampathak0809@gmail.com' });         // payUsingpaytm ek response ko return karega
        let information = {            //patym ke information ke liye form -- in form of object
            action: 'https://securegw.paytm.in/order/process',
            params: response
        }
        post(information);         // hum util me se post function me information pass karwage
    }

    return (
        <Box textAlign="center">
            {product && Object.keys(product).length &&
                <Grid container spacing={2} justifyContent="center">
                    <Grid item lg={5} md={12} sm={12} xs={12}>
                        <Box>
                            <ProductImage src={product.detailUrl} />
                            <Box style={{ textAlign: "center" }}>
                                <Button
                                    variant="contained"
                                    onClick={() => addItemToCart()}
                                    style={{ width: "12.5rem", height: "2.81rem", backgroundColor: "#ff9f00", margin: "4px" }}>
                                    <ShoppingCartIcon />Add to Cart
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={() => buyNow()}
                                    style={{ width: "12.2rem", height: "2.81rem", backgroundColor: "#fb541b", margin: "4px" }}>
                                    <FlashOnIcon />Buy Now
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={7} md={12} sm={12} xs={12}>
                        <DetailInfo product={product} />
                    </Grid>
                </Grid>
            }
        </Box >
    )
}

export default DetailView;

