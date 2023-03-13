import React, { useEffect, useState } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
//redux
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/actions/getProductAction";
import { Link } from "react-router-dom";

//styling InputSearch--> InputSearchBase
const InputSearchBase = styled(InputBase)`
background-color: white;;
width:80%;
${'' /* margin:0 0 10px 0; */}
`;

const Wrapper1 = styled(Box)`
height:2.813rem;
width:100%;
background-color:white;
border-radius:2px;
`;

const ListWapper = styled("Box")`
background-color:white;
color:black;
`;

const Search = function () {

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    //useEffects
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    //States
    const [text, setText] = useState("");
    const getSearchText = (text) => {
        setText(text);
    }


    return (
        <Wrapper1 >
            <Box>
                <InputSearchBase
                    placeholder="Search for products, brands and more"
                    onChange={(e) => getSearchText(e.target.value)}
                    padding={"0"}
                    width={"80%"}
                />
                <Box component="span" width={"20%"}>
                    <SearchIcon style={{ color: "#2874f0", padding: "1.75% 0 0 0" }} />
                </Box>
            </Box>

            <ListWapper style={{ backgroundColor: "white" }}>
                {
                    text &&
                    <List style={{ backgroundColor: "white" }}>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                <ListItem>
                                    <Link to={`/product/${product.id}`} onClick={() => setText("")} style={{ textDecoration: "none" }}>
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </List>
                }
            </ListWapper>
        </Wrapper1>
    );
}

export default Search;