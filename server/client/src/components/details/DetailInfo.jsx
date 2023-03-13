import React from "react";
//mui components
import { Box } from "@mui/system";
import { Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styled from "@emotion/styled";
//Image URL
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
//Date
const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));  // adding 5 days in cuur day;
//style
const Badge = styled(LocalOfferIcon)`
margin-right:10px;
color:#00CC00;
font-size:20px;
margin:5px 5px 5px 5px;
`;


export const DetailInfo = ({ product }) => {
    return (
        <Box style={{ textAlign: "left", padding: "1.25rem", margin: "0 0 0 0" }}>
            <Typography>
                <h2 margin="2.5rem 0 0 3.75rem">{product.title.longTitle}</h2>
            </Typography>
            <Typography fontSize="1.125rem" style={{ color: "#878787" }}>
                8 Ratings & 1 Reviews &nbsp; &nbsp;
                <Box component="span">
                    <img src={fassured} alt="Fassured" height="30.875rem" />
                </Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: "1.75rem" }}>₹{product.price.cost}&nbsp; &nbsp;</Box>
                <Box component="span" style={{ color: "#878787" }}><strike>₹{product.price.mrp}</strike>&nbsp; &nbsp;</Box>
                <Box component="span" style={{ color: "#388E3C" }}>{product.price.discount} off</Box>
            </Typography>
            <Typography margin="10px 0" fontWeight="300" fontSize="20px" >Available offers</Typography>
            <Typography><Badge color="green" />Buy this Product and Get Extra ₹500 Off on Two-Wheelers T&C</Typography>
            <Typography><Badge />Bank Offer 5% Cashback on Flipkart Axis Bank Card T&C</Typography>
            <Typography><Badge />Partner Offer Buy this product and get upto ₹500 off on Flipkart FurnitureKnow More</Typography>
            <Typography><Badge />Bank Offer 10% off on ICICI Bank Credit Card EMI Transactions, up to ₹2,000  T&C</Typography>
            <Typography><Badge />Partner Offer Get GST Invoice Available & Save up to 28% for Business purchases.</Typography>
            <Typography><Badge />Partner Offer Purchase now & get a surprise cashback coupon .</Typography>
            <Box>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
                            <TableCell style={{ fontWeight: "600" }}>1 Year Domestic Warranty</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
                            <TableCell style={{ fontWeight: "600" }}>Delivery by {date.toDateString()} || charges: ₹40</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: "#878787", verticalAlign: "baseline" }}>Seller</TableCell>
                            <TableCell style={{ fontWeight: "600" }}>
                                <Typography color="#2874f0"> SuperComNet</Typography>
                                <Typography> GST Invoice Available</Typography>
                                <Typography> View more sellers starting from ₹{product.price.cost} </Typography>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan="2"><img src={adURL} alt="supercoin" width={"100%"} /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ color: "#878787", verticalAlign: "baseline" }}>Description</TableCell>
                            <TableCell style={{ verticalAlign: "baseline" }}>{product.description}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>

        </Box>


    );
}
{/*  colspan 2 means merges 2 coloum  */ }