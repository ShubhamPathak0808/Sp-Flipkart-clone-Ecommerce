import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";

//components
import CategoryBar from "./home_components/CategoryBar";
import CrousalBanner from "./home_components/CrousalBanner";
import { getProducts } from "../../redux/actions/getProductAction"
import Slide from "./home_components/Slide";
import AdvertizingBanners from "./home_components/AdvertizingBanners";
 

const Home = function () {
    const dispatch = useDispatch();
    useEffect(function () {                // useEffect is for running a state at the time when open the app
        dispatch(getProducts())
    },
        [dispatch])           // dispatch ke change hote hi hamara ye useEffect trigger ho jaaega

    const { products } = useSelector(state => state.getProducts)  // state =  data from  getProduct in dataBase of frontend i.e Redux store
    // console.log(products);

    return (
        <>
            {/* <catatogyWrapper> */}
            <CategoryBar />
            {/* </catatogyWrapper> */}
            <Box style={{ padding: "1vh .5vw 1vh .5vw", backgroundColor: "#F2F2F2" }} >
                <CrousalBanner />
                <Slide products={products} title="Deal of the Day" timer={true} advertisement={true} />
                <Slide products={products} title="Discounts for you" timer={false} advertisement={false} />
                <Slide products={products} title="Suggestions you may like" timer={false} advertisement={false} />
                <AdvertizingBanners />
                <Slide products={products} title="treanding Items" timer={false} advertisement={false} />
                <Slide products={products} title="Season's top picks " timer={false} advertisement={false} />
                <Slide products={products} title="Best offers" timer={false} advertisement={false} />
            </Box>
        </>

    );
}

export default Home;