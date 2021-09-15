import { Box, makeStyles } from '@material-ui/core'
import LinkedIn from '@material-ui/icons/LinkedIn'
import React from 'react'
import { generalBlue } from '../Constants/colorConstants';

const useStyles = makeStyles(theme => ({
    copyright: {
        justifyContent: "space-between"
    },
    icon: {
        color: generalBlue
    }
}))

export default function CopyRight() {

    const classes = useStyles();

    return (
        <Box display="flex" flexDirection="row" alignItems="center" margin={3.5} className={classes.copyright} >
            <Box display="flex" justifyContent="center" alignItems="center" fontWeight="bold">
                Linked<LinkedIn className={classes.icon} />
            </Box>
            <Box>
                Linkedin &copy; 2021
            </Box>
        </Box >
    )
}
