import { Box, Grid, Icon, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
    sizeSquare: {
        fontSize: "4px",
    },
    boxItem: {
        margin: theme.spacing(0.25),
    }
}))

export default function CustomMenuIcon() {

    const classes = useStyles();

    return (
        <Box>
            <Box display="flex" flexDirection="row">
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
            </Box>
            <Box display="flex" flexDirection="row">
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
            </Box>
            <Box display="flex" flexDirection="row">
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
                <Icon className={"fas fa-square " + classes.sizeSquare + " " + classes.boxItem} />
            </Box>
        </Box>
    )
}


