import React from "react";
//mui
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
//styling
const EmptyImage = styled(Box)`
text-align:center;
 padding: 30px;
 ${'' /* height:25rem;
 width:37.5rem;
 margin:auto; */}
`;

export const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return(
      <Box textAlign={"center"}>
         <EmptyImage>
             <img src={imgurl} alt="Empty" style={{height:"60vh" ,width:"70vw"}} />
         </EmptyImage>
         <Typography>Your Cart is Empty</Typography>
         <Typography>Add items to it now</Typography>
      </Box>
    )
}