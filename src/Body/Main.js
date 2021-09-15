import React from 'react'

import AboutSection from './AboutSection'
import Center from './Center'
import MiddleNav from './MiddleNav'
import bgImage from '../Assets/figma_background_image.png'
import figmaLogo from '../Assets/figma_logo.png'
import { Box, Card, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({

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
        <>
            <Box width="100%" height="150px" >
                <img className={classes.bgImage} src={bgImage} />
            </Box>
            <Card className={classes.card}>
                <img className={classes.figmaLogo} src={figmaLogo} />
            </Card>
            <Box className={classes.content} >
                <Center />
                <MiddleNav />
                <AboutSection /> 
            </Box>
        </>
    )

}
