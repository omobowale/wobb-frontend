import { Box, Icon, makeStyles } from '@material-ui/core'
import React from 'react'
import ViewIcon from '../Others/ViewIcon'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DotDivider from '../Others/DotDivider';
import { generalBlue } from '../Constants/colorConstants';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(0, 0, 1.5, 0)
    },
    setOpacity: {
        opacity: 0.7
    },
    title: {
        paddingTop: theme.spacing(10),
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: theme.spacing(1)
    },
    description:{
        fontSize: "12px",
        fontWeight: "bold",
        marginBottom: theme.spacing(1.5),
        opacity: 0.5
    },
    details: {
        fontWeight: "normal",
        fontSize: "12px",
        marginBottom: theme.spacing(1.5),
        opacity: 0.8
    },
    link: {
        fontWeight: "bold",
        fontSize: "12px",
        color: generalBlue,
    },
    arrow: {
        fontWeight: "bold",
        fontSize: "14px",
        color: {generalBlue},
        marginTop: theme.spacing(0.3),
        marginLeft: theme.spacing(0.5),
    }

}))

export default function Center() {

    const classes = useStyles();

    return (
        <>
            <Box bgcolor="white" borderRadius="5px" padding={2} className={classes.root}>
                
                <Box variant="h5" className={classes.title}>
                    Figma
                </Box>
                <Box className={classes.description}>
                    A design platform for teams who build products together
                </Box>
                <Box className={classes.details}>
                    Design <DotDivider /> San Francisco, CA <DotDivider /> 101,252 followers
                </Box >
                <Box display="flex" flexDirection="row" marginBottom={1.5}>
                    <Box className={classes.link}>
                        See all 358 employees in Linkedin
                    </Box>
                    <ArrowForwardIcon className={classes.arrow} />
                </Box>
                <Box display="flex" flexDirection="row" p={0} bgcolor="background.paper" fontWeight="bold" className={classes.setOpacity} >
                    <Box display="flex" flexDirection="row" paddingX={1.5} paddingY={1} alignItems="center" bgcolor={generalBlue} borderRadius="5px" marginRight={2}>
                        <Box marginRight={1.5}><ViewIcon color="#ffff" /></Box>
                        <Box color="#ffff" fontSize="11px">Follow</Box>
                    </Box>
                    <Box display="flex" flexDirection="row" paddingX={1.5} paddingY={1} alignItems="center" bgcolor="white" border="1px solid #0275d8" borderRadius="5px" marginRight={2}>
                        <Box marginRight={1.5} color={generalBlue}><Icon color={generalBlue} style={{ fontSize: "12px"}} className="fas fa-x fa-external-link-alt" /></Box>
                        <Box color="black" fontSize="11px">Visit website</Box>
                    </Box>
                    <Box display="flex" flexDirection="row" paddingX={1.5} paddingY={1} alignItems="center" bgcolor="lavender" borderRadius="5px" marginRight={2}>
                        <Box color={generalBlue}><Icon color={generalBlue} style={{ fontSize: "14px", paddingTop:"6px"}} className="fas fa-ellipsis-h" /></Box>
                    </Box>

                </Box>
            </Box>
        </>
    )
}
