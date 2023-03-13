import React, { useState , useContext } from "react";
//MUI components
import { Typography, Box, styled, Menu, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
//context
import { DataContext } from "../../../context/DataProvider";


const Wrapper1 = styled(Box)`
margin-left:2vw;
margin-right:2vh;
text-decoration:
`;
const Menu_Wrapper = styled(Menu)`
`;
const UserProfile = function () {
    const [user_name,set_user_name] = useContext(DataContext).userName;
    const [open_user_menu, open_user_menu_condition_toggle] = useState(false);
    const handle_Event_for_menu_to_open = function (event) {
       open_user_menu_condition_toggle(event.currentTarget)
    }
    const handle_Event_for_menu_to_close = function () {
        open_user_menu_condition_toggle(false);
    }
    const handling_logout = function(){
      set_user_name('');
    }
    return (
        <>
            <Wrapper1>
                <Typography
                    style={{ fontWeight: "bold"}}
                    onClick={handle_Event_for_menu_to_open}
             
                >
                    {user_name}
                </Typography>
            </Wrapper1>
            <Menu_Wrapper
                anchorEl={open_user_menu}
                open={Boolean(open_user_menu)}
                onClose={handle_Event_for_menu_to_close}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={ handling_logout}>
                 <PowerSettingsNewIcon color="primary" fontSize="small" />&nbsp;&nbsp; Logout
                </MenuItem>
            </Menu_Wrapper>
        </>
    )

}

export default UserProfile;