import React from "react";
//mui
import { Box, Button, ButtonGroup } from "@mui/material";
import styled from "@emotion/styled";
//styling
const StyledButtonOperations = styled(Button)`
  border-radius : 50%;
  border: solid 1px black;
  
`;
const StyledButtonDisplay = styled(Button)`
  border-radius : 0;
  border: solid 1px black;
`;

export const QuantityCounter = () => {
    return (
        <Box textAlign={"center"} style={{margin:"10px 0"}}>
            <ButtonGroup>
                <StyledButtonOperations>-</StyledButtonOperations>
                <Button disabled>1</Button>
                <StyledButtonOperations>+</StyledButtonOperations>
            </ButtonGroup>
        </Box>

    );
}