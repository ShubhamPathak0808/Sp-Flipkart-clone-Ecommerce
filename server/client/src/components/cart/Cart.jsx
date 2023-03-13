import React from "react";
//*****redux
import { useSelector } from "react-redux";  //redux se koi value/state ko pick karne me help karta haik--- acts as a custom hook -- jiska bhi name use se start hota hai wo custom hook hota hai
//*****components
import { CartItem } from "./CartItem";
import { TotalBill } from "./TotalBill";
import { EmptyCart } from "./EmptyCart";
//*****mui 
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
//api
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";
//styling
const WrapperParent = styled(Grid)`
  ${'' /* padding : 30px 135px; */}
  ${'' /* padding : 1.875rem 8.438rem; */}
`;



const Child1Heading = styled(Box)`
  padding: 15px 24px;
  background-color:white;
`;
const ButtonContainer = styled(Box)`
 text-align:right;
 padding:16px 22px;
 background-color:#fff;
 box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
 border-top:1px solid #f0f0f0; 
`;
const PlaceOrderButton = styled(Button)`
 margin-left:auto;
 background-color:#fb641b;
 color:#fff;
 width:15.625rem;
 border:15.625rem;
 height:51px;
 border-radius:0.188rem;
`;




const buyNow = async () => {                  //iss ke click par pay using paytm wali api kpo call karna hai
  let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com' });         // payUsingpaytm ek response ko return karega
  let information = {            //patym ke information ke liye form -- in form of object
    action: 'https://securegw-stage.paytm.in/order/process',
    params: response
  }
  post(information);         // hum util me se post function me information pass karwage
}




const Cart = () => {
  const { cartItems } = useSelector(state => state.getCartDetails);   // cartItems ek aaray hai jo getCartDetails ke value me present hai

  return (
    // handle kar rahe hai ki agar cart me kuch nahi hua to
    cartItems.length ?
      <WrapperParent container>
        <Grid item lg={2} md={1} sm={0} xs={0}> </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} style={{ backgroundColor: "white" }}>    {/* container containing items aur quantity  */}
          <Child1Heading>
            <Typography>My Cart ({cartItems.length})</Typography>
          </Child1Heading>
          {
            cartItems.map(item => (
              <CartItem item={item} /> //item ko as a prop pass kar rahe hai
            ))
          }
          {/* <ButtonContainer>
                  <PlaceOrderButton
                  onClick={() => buyNow()}
                  >
                  Place Order
                  </PlaceOrderButton>
                </ButtonContainer>  */}
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>   {/* contaier containing billing amount  */}
          <TotalBill cartItems={cartItems} />
        </Grid>
        <Grid item lg={2} md={1} sm={0} xs={0}> </Grid>
        <Grid container>
          <Grid item lg={2} md={1} sm={0} xs={0}> </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12} style={{ backgroundColor: "white" }}>
            <ButtonContainer>
              <PlaceOrderButton
                onClick={() => buyNow()}
              >
                Place Order
              </PlaceOrderButton>
            </ButtonContainer>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}> </Grid>
          <Grid item lg={2} md={1} sm={0} xs={0}> </Grid>
        </Grid>

      </WrapperParent>
      :
      <EmptyCart />
  )
}

export default Cart;