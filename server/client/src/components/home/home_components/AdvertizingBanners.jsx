import React from "react";
import { AdvertizingBannersimageURL } from "../../../constantDatas/AdvertizingbannersData";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

//styling
const BannerImage = styled("img")(
   
    ({ theme }) => ({
        width: "100vw",
        height: "40vh",
        [theme.breakpoints.down("md")]: {
            height:"25vh"
        }
    })
    
);

const url = "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
const AdvertizingBanners = function () {
    return (
        <>
            <hr />
            <Grid container>
                {
                    AdvertizingBannersimageURL.map(function (Data) {
                        return (
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <img src={Data} alt="Advertising Banners" style={{ width: "100%" }} />
                            </Grid>
                        )
                    })
                }
            </Grid>
            <BannerImage src={url} alt="covid image" />
        </>
    );
}

export default AdvertizingBanners;