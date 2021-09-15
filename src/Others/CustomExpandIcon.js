import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@material-ui/core';


export default function CustomExpandIcon() {
    return (
        <Box>
            <ExpandMoreIcon style={{color: "grey", fontSize: "15px", marginTop: "2px"}} />
        </Box>
    )
}
