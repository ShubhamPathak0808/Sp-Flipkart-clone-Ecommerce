import React, { useState, useContext } from "react";
import { Box, Dialog, TextField, Typography, Button } from '@mui/material';
import { authenticateSignup, authenticateLogIn } from "../../service/api";
import styled from "@emotion/styled";
import { DataContext } from "../../context/DataProvider";

//styling


var signUp_user_data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
}

var logIn_user_data = {
    email: '',
    password: ''
}

const signUp_initial_Values_empty = signUp_user_data;

const accountInitialValues = {
    login: {
        view: "login"
    },
    signup: {
        view: "signUp",
        heading: "looks like you are new here!!"
    }
}

const login_SignupImage = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png";

const Login_or_Signup_Dialog = function ({ Login_Dialog_Presence_Condition, Login_Dialog_Presence_Condition_toggle, isOpen, isOpenToggle }) {

    const handleClose = function () {
        if (isOpen === true && Login_Dialog_Presence_Condition_toggle === true) {
            isOpenToggle(false);
        }
        Login_Dialog_Presence_Condition_toggle(false);
    }

    const [login_SignUp, toggle] = useState(accountInitialValues.login);
    // const [signUp_values, set_signUp_values] = useState(signUp_initial_Values);
    const [user_name, set_user_name] = useContext(DataContext).userName;
    // console.log(user_name);

    const toSignup = function () {
        toggle(accountInitialValues.signup);
        // console.log(login_SignUp);
    }

    const toLogin = function () {
        toggle(accountInitialValues.login);
    }

    const onInputChange_login = function (logIn_Data) {
        // console.log(logIn_Data.target.value, logIn_Data.target.name);
        const key = logIn_Data.target.name;
        const value = logIn_Data.target.value;
        // signUp_initial_Values={...signUp_initial_Values,[key]:""};
        logIn_user_data = { ...logIn_user_data, [key]: value };
        // console.log(logIn_user_data);
    }

    const onInputChange = function (Signup_Data) {
        // console.log(Signup_Data.target.value, Signup_Data.target.name);
        const key = Signup_Data.target.name;
        const value = Signup_Data.target.value;
        // signUp_initial_Values={...signUp_initial_Values,[key]:""};
        signUp_user_data = { ...signUp_user_data, [key]: value };
        // console.log(signUp_user_data);
    }

    const userSignUp_process = async function () {
        const response = await authenticateSignup(signUp_user_data);
        // console.log(response);
        if (response) {      //if we get response close the dialog
            handleClose();
            set_user_name(signUp_user_data.firstName)
        }


    }

    const userLogIn_process = async function () {
        const response = await authenticateLogIn(logIn_user_data);
        // console.log(response);
        if (response) {
            handleClose();
            // console.log(response);
            // console.log(response.data.message.firstName);
            set_user_name(response.data.message.firstName);
        }
        else {
            alert("Bad cradentials ,enter correct information, or Signup");
        }
    }


    const Wrapper1 = styled(Box)`
      display:Flex;
      height:90vh;
      width:70vw;
    `;

    const Wrapper2 = styled(Box)`
      background-color:#2874F0;
      height:100%;
      width:40%;
      color:white;
    `;
    const Wrapper3 = styled(Box)`
      display:Flex;
      flex-direction : column;
      text-align:center;
      width:60%;
    `;
    const LoginButton = styled(Button)`
     text-transform:none;   ${'' /*For making capital to lower case  as MUI puts it default*/}
     background-color:#FB641B;
     margin:auto;
     width:100%;
     height:8vh;
     font-size:20px;
    `;
    const Request_OTP_Button = styled(Button)`
     text-transform:none;   ${'' /*For making capital to lower case  as MUI puts it default*/}
     background-color:white;
     box-shadow: 0 2px 4px 0px grey;
     margin:auto;
     width:100%;
     height:8vh;
     font-size:20px;
    `;

    return (
        <Dialog open={Login_Dialog_Presence_Condition} onClose={handleClose} PaperProps={{ sx: { maxWidth: "unset" } }}>
            <Wrapper1>
                {login_SignUp.view === "login" ?
                    <Wrapper2>
                        <Box margin="5vh 3vw 10vh 3vw">
                            <Typography variant="h4">Login</Typography>
                            <br />
                            <Typography>Get access to your Orders, Wishlist and Recommendations</Typography>
                        </Box>
                        <img src={login_SignupImage} alt="login_SignupImage not displayed" style={{ margin: "5vh 3vw 10vh 3vw" }} />
                    </Wrapper2>
                    :
                    <Wrapper2>
                        <Box margin="5vh 3vw 10vh 3vw">
                            <Typography variant="h4">Looks like you are new here!</Typography>
                            <br />
                            <Typography>Sign up by filling information to get started</Typography>
                        </Box>
                        <img src={login_SignupImage} alt="login_SignupImage not displayed" style={{ margin: "5vh 3vw 10vh 3vw" }} />
                    </Wrapper2>
                }

                {login_SignUp.view === "login" ?

                    <Wrapper3 margin="5vh 3vh 10vh 3vw">
                        <TextField onChange={function (logIn_Data) { return (onInputChange_login(logIn_Data)) }} label="Enter email/Mobile number" name="email" variant="standard" style={{ margin: "0 0 3vh 0" }} />
                        <TextField onChange={function (logIn_Data) { return (onInputChange_login(logIn_Data)) }} label="Enter Password" name="password" variant="standard" style={{ margin: "0 0 3vh 0" }} />
                        <Typography
                            style={{
                                margin: "0 0 3vh 0",
                                fontSize: "12px",
                                color: "gray",
                                textAlign: "left"
                            }}
                        >
                            By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                        </Typography>
                        <Box
                            style={{
                                textAlign: "center"
                            }}
                        >
                            <LoginButton
                                variant="contained"
                                style={{
                                    margin: "0 0 3vh 0"
                                }}
                                onClick={userLogIn_process}
                            >
                                Login
                            </LoginButton>
                            <Typography style={{ margin: "0 0 3vh 0" }}>OR</Typography>
                            <Request_OTP_Button style={{ margin: "0 0 3vh 0" }}>Request OTP</Request_OTP_Button>
                        </Box>
                        <Button
                            onClick={toSignup}
                            style={{
                                margin: "10vh 0 3vh 0",
                                color: "#2874F0",
                                textTransform: "none"
                            }}
                        >
                            New to Flipkart? Create an account
                        </Button>
                    </Wrapper3>
                    :
                    <Wrapper3 margin="5vh 3vh 10vh 3vw">
                        <TextField onChange={function (Signup_Data) { return (onInputChange(Signup_Data)) }} name="firstName" label="Enter Firstname" variant="standard" style={{ margin: "0 0 3vh 0" }} />
                        <TextField onChange={function (Signup_Data) { return (onInputChange(Signup_Data)) }} name="lastName" label="Enter Lastname" variant="standard" style={{ margin: "0 0 3vh 0" }} />
                        <TextField onChange={function (Signup_Data) { return (onInputChange(Signup_Data)) }} name="email" label="Enter Email" variant="standard" style={{ margin: "0 0 3vh 0" }} />
                        <TextField onChange={function (Signup_Data) { return (onInputChange(Signup_Data)) }} name="password" label="Enter Password" variant="standard" style={{ margin: "0 0 3vh 0" }} />
                        <TextField type="number" onChange={function (Signup_Data) { return (onInputChange(Signup_Data)) }} name="phoneNumber" label="Enter Phone-number" variant="standard" style={{ margin: "0 0 3vh 0" }} />
                        <LoginButton
                            variant="contained"
                            onClick={userSignUp_process}
                            style={{
                                margin: "0 0 3vh 0"
                            }}
                        >
                            SignUp
                        </LoginButton>
                    </Wrapper3>

                }
            </Wrapper1>
        </Dialog>
    );
}

export default Login_or_Signup_Dialog;