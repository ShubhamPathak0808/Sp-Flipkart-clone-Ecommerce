import React, { useState, useContext } from "react";
//material UI components
import { Box, styled } from "@mui/system";
import { Badge, Button, Typography } from "@mui/material";
//Components
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login_or_Signup_Dialog from "../../login/Login_or_Signup_Dialog";
import UserProfile from "./UserProfile";
//context
import { DataContext } from "../../../context/DataProvider";
import { Link } from "react-router-dom";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
//redux
import { useSelector } from "react-redux";          // to get cart length from redux store
//styling

const Wrapper1 = styled(Box)(
  ({ theme }) => ({
    display: "Flex",     // for making itens in same line 
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "Block",
      lineSpace: "50px"
    }
  })
)
const Wrapper2 = styled(Link)(
  ({ theme }) => ({
    textDecoration: "none",
    display: "Flex",     // for making itens in same line 
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "Block",
      lineSpace: "50px"
    }
  })
)
const LoginButton = styled(Button)`
background-color : white;
color : #2874f0;
margin : 0 2vw 0 2vw;
width: 8vw;
height : 50%;
text-transform : none;
font-weight:600;     ${'' /* for making it bold */}
`;
// const ButtonWrapper = styled(Button)`
// text-decoration:none;
// text-transform:none;
// color:white;
// `;
const ButtonWrapper = styled(Button)(
  ({ theme }) => ({
    textDecoration: "none",
    textTransform: "none",
    color: "white",
    [theme.breakpoints.down("md")]: {
      color: "#2874f0"
    }
  })
)



const CustomButtons = function () {


  const [user_name, set_user_name] = useContext(DataContext).userName;

  const [Login_Dialog_Presence_Condition,Login_Dialog_Presence_Condition_toggle] = useContext(DataContext).loginDialog;
  const open_LoginDialog = function () {
    Login_Dialog_Presence_Condition_toggle(true);
  }

  const {cartItems} = useSelector(state => state.getCartDetails);

  return (
    <Wrapper1>
      {user_name ? <UserProfile user_name={user_name} /> : //empty string is considerd as false in js
        <LoginButton variant="contained" onClick={open_LoginDialog}>Login</LoginButton>
      }

      <Typography style={{ margin: "0 2vw 0 2vw" }}><ButtonWrapper>Become a Seller</ButtonWrapper></Typography>
      <Typography style={{ margin: "0 2vw 0 2vw" }}><ButtonWrapper>More</ButtonWrapper></Typography>
      <Wrapper2 to="/cart" style={{ margin: "0 2vw 0 2vw" }}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <Typography>
            <ButtonWrapper><ShoppingCartIcon />Cart</ButtonWrapper>
          </Typography>
        </Badge>
      </Wrapper2>
      <Login_or_Signup_Dialog Login_Dialog_Presence_Condition={Login_Dialog_Presence_Condition} Login_Dialog_Presence_Condition_toggle={Login_Dialog_Presence_Condition_toggle} />
    </Wrapper1>
  );
}

export default CustomButtons;