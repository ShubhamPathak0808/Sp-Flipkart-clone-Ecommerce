
import React, { useState } from "react";
//mui 
import { Box } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

    return (
        <>
            <Box style={{ backgroundColor: "#1B2431", color: "white" }}>
                <hr />
                <Box textAlign={"center"} padding={"15vh 10vh"}>
                    <h3 style={{ weight: "600" }}>© Copyright Sp-Developers</h3>
                    <h4>FlipKart Clone Project</h4>
                    <h5>Get in Touch</h5>
                    <Box textAlign={"center"}>
                        <a href="https://www.linkedin.com/in/shubham-pathak-202aa5144" target="_blank" style={{ textDecoration: "none" }}><LinkedInIcon style={{margin:"0 5px"}}/></a>
                        <a href="https://github.com/ShubhamPathak0808" target="_blank"><GitHubIcon style={{margin:"0 5px"}}/></a>
                        <a href="https://instagram.com/shubhampathak4139?igshid=ZDdkNTZiNTM=" target="_blank"><InstagramIcon style={{margin:"0 5px"}}/></a>
                        <a href="https://twitter.com/Shubham34476758?t=qZNld3ehT6smnBrjzHPPGQ&s=09" target="_blank"><TwitterIcon style={{margin:"0 5px"}}/></a>
                        
                            <Box style={{margin:"0",textAlign:"center"}}>shubhmapathak0809@gmail.com</Box>
                       
                    </Box>
                </Box>

            </Box>
        </>
    );
}

export default Footer;