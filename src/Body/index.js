import { Box, Card, Grid, makeStyles, Container } from '@material-ui/core'
import React from 'react'
import SideBarItem from './SideBarItem'
import brands from "../data/Brand"
import Main from './Main'
import QuickLinks from '../QuickLinks'
import CopyRight from '../Info'

const useStyles = makeStyles((theme) => ({
    bodyRoot: {
        marginTop: theme.spacing(4),
    },
    item: {
        paddingLeft: theme.spacing(1)
    },
    title: {
        fontSize: "14px",
        fontWeight: "bold",
        opacity: 0.8,
        padding: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    sidebar: {
        // position: "relative",
        // [theme.breakpoints.down('sm')]: {
        //     top: "120px"
        // },
    }
}))

export default function Body() {

    const classes = useStyles();
    
    return (
        <Container className={classes.bodyRoot}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Main  />
                </Grid>
                <Grid item xs={12} md={4} className={classes.sidebar}>
                    <Card>
                        <Box className={classes.title}>
                            Pages people also viewed
                        </Box>
                        {brands.map((brand) => {
                            return <SideBarItem name={brand.brandName} category={brand.brandCategory} image={brand.brandImgUrl} followers={brand.brandNoOfFollowers} />
                        })}
                    </Card>
                    
                    <QuickLinks />

                    <CopyRight />
                    

                </Grid>
            </Grid>
        </Container>
    )
}
