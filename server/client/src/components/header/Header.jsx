import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, styled, Box, IconButton, Drawer, List, ListItem } from "@mui/material";
//componenets
import Search from "./header_components/Search";
import CustomButtons from "./header_components/CustomButtons";
import { Link } from "react-router-dom";
import { display, margin } from "@mui/system";
import MenuIcon from '@mui/icons-material/Menu';
//Styling with Theme
const CustomButtonsWrapper = styled(Box)(
    ({ theme }) => ({
        textAlign: "right",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    })
)
const MenuButton = styled(IconButton)(
    ({ theme }) => ({
        display: "none",
        [theme.breakpoints.down("md")]: {
            display: "block"
        }
    })
)


//Stying of AppBar --> AppBar1
const AppBar1 = styled(AppBar)`
background : #2874f0;
width:100%;
height :4.188rem;
`;
//Styling image Box --> Box1
const Box1 = styled(Box)`
line-height : 50%;
text-align : right;
margin:0 0.313rem 0 0;
`;
//Styling topography heading --> SubHeading
const SubHeading = styled(Box)`
font-style: italic;
margin-right:0;
font-size : 0.938rem;
`;
//Styling img --> PlusImage --> as img is not a mui component ,so we have to paas html tag as a string in styled function
const PlusImage = styled("img")(
    { width: "5%", height: "5%" }
)  // html tag is handled using object

const ImgSearch = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        width: '50vw',
        [theme.breakpoints.down("md")]: {
            display: 'flex',
            width: '100vw',
        }
    })
)




const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';





const Header = function ({Login_Dialog_Presence_Condition, Login_Dialog_Presence_Condition_toggle}) {
    //useStates
    const [isOpen, isOpenToggle] = useState(false);
    const handleOpenDrawer = () => {
        isOpenToggle(true);
    }
    const handleCloseDrawer = () => {
        if (Login_Dialog_Presence_Condition === true) {
            // isOpenToggle(false);
            Login_Dialog_Presence_Condition_toggle(true);
        }
        else {
            isOpenToggle(false);
        }

    }
    //list
    const list = () => (
        <Box onClick={handleCloseDrawer} >
            <List>
                <ListItem button>
                    <CustomButtons isOpen={isOpen} isOpenToggle={isOpenToggle}/>
                </ListItem>
            </List>
        </Box>
    )
   
    return (

        <AppBar1>   {/* just a div with width 100%*/}
            <Toolbar>  {/* another div with width 100% - mainly used for elements toots,items*/}
                <MenuButton onClick={handleOpenDrawer}>
                    <MenuIcon style={{ color: "white" }} />
                </MenuButton>
                <Drawer open={isOpen} onClose={handleCloseDrawer}  >
                    {list()}
                </Drawer>

                <ImgSearch>
                    <Link to={`/`} style={{ textDecoration: "none" }} >
                        <Box1 alignContent="center" padding={"7% 0 0 0"}>
                            <img
                                src={logoURL}
                                alt="FlipKart"
                                width="40%"
                            />    {/*for writing Js in return statement we have to use "{}"*/}
                            <Box>
                                <SubHeading>
                                    Explore
                                    <span style={{ color: "#FFE500" }}> Plus</span>
                                    <PlusImage src={subURL} alt="+" />
                                </SubHeading>{/* for passing style direct into style--> as a object we have to pass*/}
                            </Box>
                        </Box1>
                    </Link>
                    <Search width={"70%"} />
                </ImgSearch>



                <CustomButtonsWrapper>
                    <CustomButtons />
                </CustomButtonsWrapper>
            </Toolbar>
        </AppBar1>
    )
}
export default Header;
