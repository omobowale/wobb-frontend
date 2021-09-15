import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    active: {
        color: "green",
        borderBottom: "2px solid green"
    },
}))



export default function MiddleNavItem({name, active}) {
    const classes = useStyles();

    return (
        <Box paddingX={0} paddingY={1.5} className={active ? classes.active + " " + classes.box  : classes.box} >
            {name}
        </Box>
    )
}
