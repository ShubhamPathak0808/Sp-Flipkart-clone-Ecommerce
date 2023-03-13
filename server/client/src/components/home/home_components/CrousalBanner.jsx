import React from "react";
//mui
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import { styled } from "@mui/system";
import { crousalBannerData } from "../../../constantDatas/crousalBannerData";

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


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const CrousalBanner = function () {
    return (                     //passing responsive as a property
        <>
            <hr />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
            >
                {
                    crousalBannerData.map(function (Data) {
                        return (
                            <BannerImage src={Data.url} alt="crousalData" />
                        )
                    })
                }
            </Carousel>
        </>
    );
}

export default CrousalBanner;