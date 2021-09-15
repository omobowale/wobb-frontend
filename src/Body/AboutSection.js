import {Grid, Link, makeStyles, Box } from '@material-ui/core'
import React from 'react'
import AboutItem from './AboutItem';

const useStyles = makeStyles(theme => ({
    title: {
        fontWeight: "bold",
        fontSize: "16px",
        opacity: 0.8,
        marginBottom: theme.spacing(2.5)
    },
    description: {
        fontWeight: "bold",
        fontSize: "12px",
        opacity: 0.7,
        marginBottom: theme.spacing(1.5)

    }
}))

export default function AboutSection() {
    const classes = useStyles();

    return (
        <Box bgcolor="white" borderRadius="5px" padding={2}>
            <Box className={classes.title}>
                About
            </Box>
            <Box className={classes.description}>
                Figma is the first professional-grade online tool created specifically for interface design. Born on the web, Figma helps the entire product team create, test and ship better designs faster.
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <AboutItem line1="" line2="Website URL" line3="Figma.com" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <AboutItem line1="Funding via Crunchbase" line2="Series DL" line3="US$ 50M" />
                </Grid>
            </Grid>
            <Box align="center" fontWeight={"bold"} marginY={2}>
                <Link href="/">See all details</Link>
            </Box>

        </Box>
    )
}
