import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import CustomExpandIcon from '../Others/CustomExpandIcon';
import DotDivider from '../Others/DotDivider';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1.5),
        boxShadow: "0px 15px 2px -15px #111",
        padding: theme.spacing(1)
    },
    quicklink: {
        margin: theme.spacing(0.75, 3),
        fontWeight: "bold",
        opacity: 0.8
    }
}))

export default function QuickLinks() {
    const classes = useStyles();

    return (
        <Box className={classes.root} display="flex" flexDirection="row" flexWrap="wrap" >
            <Box className={classes.quicklink}>
                About
            </Box>
            <Box className={classes.quicklink}>
                Accessibility
            </Box>
            <Box className={classes.quicklink}>
                Help Center
            </Box>
            <Box display="flex" flexDirection="row" className={classes.quicklink}>
                <Box>Privacy & Terms</Box>
                <CustomExpandIcon />
            </Box>
            <Box className={classes.quicklink}>
                Ad Choices
            </Box>
            <Box className={classes.quicklink}>
                Adverising
            </Box>
            <Box display="flex" flexDirection="row" className={classes.quicklink}>
                <Box>Business Services</Box>
                <CustomExpandIcon />
            </Box>
            <Box className={classes.quicklink}>
                Get the Linkedln App
            </Box>
            <Box className={classes.quicklink}>
                <DotDivider />
                <DotDivider />
                <DotDivider />
            </Box>

        </Box>
    )
}
