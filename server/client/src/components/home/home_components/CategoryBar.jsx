import React from "react";
//mui
import { categoryBarData } from "../../../constantDatas/categoryBarData";
import { Box, styled } from "@mui/system";
//styling
const Wrapper1 = styled(Box)`
   display:Flex;
   justify-content:space-between;    ${'' /*will place all the content evenly spaced*/}
   margin:1.5vh 2vw 0 2vw;
   background-color:white;
   overflow-x:scroll;
`;

const CategoryBar = function () {
    return (
        <Wrapper1>
            {
                categoryBarData.map(function (Data) {
                    return (
                        <Box style={{lineHeight:"0"}}>
                            <img src={Data.url} alt="Category" />
                            <p style={{textAlign:"center"}}>{Data.text}</p>
                        </Box>
                    );
                })
            }
        </Wrapper1>

    );
}

export default CategoryBar;