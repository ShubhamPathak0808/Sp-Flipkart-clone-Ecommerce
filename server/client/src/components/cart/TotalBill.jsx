import React, { useState , useEffect } from "react";
//mui 
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
//styling
const Wrapper1 = styled(Box)`
 background-color:white;
 padding:0.938rem 1.5rem;
 border-bottom:1px solid #f0f0f0;
`;
const Heading1 = styled(Typography)`
 color:#878787;
`;
const Wrapper2 = styled(Box)`
 background-color:white;
 padding:0.938rem 1.5rem;
 & > p {
    margin-bottom:20px;
    font-size:14px;
 }
`;
const PriceBox =  styled(Box)`
 float:right;
`;
const SavingStatement = styled(Typography)`
 color:green;
 font-weight:550;
`;

export const TotalBill = ({ cartItems }) => {
    const [price , setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
     
    useEffect(() => {      //jaise hii cart ke components change hoge totalAmount wala function call hoga
        totalAmount();
    },[cartItems])

    const totalAmount = () =>{
        let price = 0, discount = 0;   // this both are local variables
        cartItems.map(item => {           // loop chala rahe hai in cartItems 
             price += item.price.mrp;
             discount += (item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }
    return (
        <>
            <Wrapper1>
                <Heading1>PRICE DETAILS</Heading1>
            </Wrapper1>
            <Wrapper2>
                <Typography>
                  Price
                  <PriceBox component='span'>₹{price}</PriceBox>
                </Typography>
                <Typography>
                  Discount
                  <PriceBox component='span'>₹{discount}</PriceBox>
                </Typography>
                <Typography>
                  Dilivery Charges
                  <PriceBox component='span'>₹40</PriceBox>
                </Typography>
                <Typography variant='h6' style={{marginBottom:"20px"}}>
                  Total Amount
                  <PriceBox component='span'>₹{price - discount + 40}</PriceBox>
                </Typography>
                <SavingStatement>
                    You will save ₹{discount - 40 } on this order
                </SavingStatement>
            </Wrapper2>
        </>
    )
}
