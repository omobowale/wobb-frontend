import React from 'react'

import AboutSection from './AboutSection'
import Center from './Center'
import MiddleNav from './MiddleNav'
import bgImage from '../Assets/figma_background_image.png'
import figmaLogo from '../Assets/figma_logo.png'
import { Box, Card, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

    root: {
        // height: "700px",
        // backgroundColor: "red",
        // [theme.breakpoints.down('md')]: {
        //     maxHeight: "700px",
        //     backgroundColor: "green"
        // },
        // // [theme.breakpoints.down('sm')]: {
        // //     height: "860px",
        // //     backgroundColor: "purple"
        // // },
    },

    bgImage: {
        position: "relative",
        borderRadius: "10px",
        width:"100%",
        height:"100%",
        objectFit: "cover"
    },
    figmaLogo: {
        width: "90px",
        height: "90px",
    },
    content: {
        position: "relative",
        top: "-130px",
    },
    card: {
        position: "relative",
        top: "-60px",
        left: "18px",
        width: "120px",
        height: "120px",
        textAlign: "center",
        lineHeight: "200px",
        zIndex: 10
    }

}))

export default function Main() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Box width="100%" height="150px" >
                <img className={classes.bgImage} src={bgImage} alt="background" />
            </Box>
            <Card className={classes.card}>
                <img className={classes.figmaLogo} src={figmaLogo} alt="logo" />
            </Card>
            <Box className={classes.content} >
                <Center />
                <MiddleNav />
                <AboutSection /> 
            </Box>
        </div>
    )

}
