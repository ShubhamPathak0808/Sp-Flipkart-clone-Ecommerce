import React from "react";
//utils
import { addEllipsis } from "../../utils/common-utils";
//componenets
import { QuantityCounter } from "./QuantityCounter";
//mui 
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
//redux
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/getCartDeatilsAction";
//styling
const WrapperParent = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: Flex; 
`;
const Child1 = styled(Box)`
  margin:auto;
  margin : 20px;
  display:flex;
  flex-direction:column;
`;
const Text2_1 = styled(Typography)`
  color: #878787;
  text-align:left;
`;
const RemoveButton = styled(Button)`
  margin-top : 20px;
  color: black;
  font-weight: 550;
  font-size: 17px;
  
`;

export const CartItem = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const dispatch = useDispatch();
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }


    return (
        <>
            <WrapperParent>
                <Child1>
                    <img src={item.url} alt="product" width={"180px"} height={"180px"} />
                    <QuantityCounter />
                </Child1>
                <Box textAlign={"left"}>
                    <h3>{addEllipsis(item.title.longTitle)}</h3>
                    <Text2_1>
                        Seller: &nbsp; Shubham's Warehouses Pvt. Ltd.
                        <Box component="span">
                            <img src={fassured} alt="Fassured" style={{ width: 50, marginLeft: 10 }} />
                        </Box>
                    </Text2_1>
                    <Typography textAlign={"left"}>
                        <Box component="span" style={{ fontSize: "20px" }}>₹{item.price.cost}&nbsp; &nbsp;</Box>
                        <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.mrp}</strike>&nbsp; &nbsp;</Box>
                        <Box component="span" style={{ color: "#388E3C" }}>{item.price.discount} off</Box>
                    </Typography>
                    <RemoveButton 
                        onClick={() => removeItemFromCart(item.id)}>
                        Remove
                    </RemoveButton>
                </Box>
            </WrapperParent>
        </>
    )
}
