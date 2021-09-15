import { Paper, Box, makeStyles } from '@material-ui/core'
import React from 'react'
import HorizontalDivider from '../Others/HorizontalDivider';
import MiddleNavItem from './MiddleNavItem';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        textAlign: 'center',
        margin: theme.spacing(0, 0, 1.5, 0)
    },
    setOpacity: {
        opacity: 0.7
    },
    box: {
        paddingLeft: theme.spacing(1.5),
        display:"flex", 
        flexDirection:"row", 
        padding:theme.spacing(0), 
        margin:theme.spacing(1), 
        alignItems:"center", 
        fontWeight:"bold",
        columnGap: theme.spacing(3),
        [theme.breakpoints.down('md')]: {
            columnGap: theme.spacing(3),
        },
        [theme.breakpoints.down('sm')]: {
            columnGap: theme.spacing(2),
            fontSize: "12px"
        },
        [theme.breakpoints.down('xs')]: {
            columnGap: theme.spacing(1),
            fontSize: "10px"
        },

    }
}))

export default function MiddleNav() {

    const classes = useStyles();

    return (
        <Paper elevation={0}>
            <div className={classes.root + " " +  classes.setOpacity}>
                <Box className={classes.box} >
                    <MiddleNavItem name="Overview" active={true} />
                    <HorizontalDivider />
                    <MiddleNavItem name="About"  />
                    <HorizontalDivider />
                    <MiddleNavItem name="Products"  />
                    <HorizontalDivider />
                    <MiddleNavItem name="Post"  />
                    <HorizontalDivider />
                    <MiddleNavItem name="Jobs"  />
                    <HorizontalDivider />
                    <MiddleNavItem name="People"  />
                    <HorizontalDivider />
                    <MiddleNavItem name="Videos"  />
                </Box>
            </div>
        </Paper>
    )
}