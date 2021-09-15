import React from 'react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        marginTop: theme.spacing(0.5)
    },
    visibleIcon: {
        fontWeight: "bold",
        fontSize: "15px"
    },
    addIcon: {
        position: "absolute",
        top: "-5px",
        left: "10px",
        fontSize: "11px",
        fontWeight: "bolder"
    }
}))

export default function ViewIcon({color}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <VisibilityOutlinedIcon className={classes.visibleIcon} style={{color: color}} >
            </VisibilityOutlinedIcon>
            <AddOutlinedIcon className={classes.addIcon} style={{color: color}}/>
        </div>
    )

}
