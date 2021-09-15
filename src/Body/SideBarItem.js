import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import ViewIcon from '../Others/ViewIcon';
import transformNumber from '../Functions/Transformer';
import DotDivider from '../Others/DotDivider';
import { generalBlue } from '../Constants/colorConstants';

const useStyles = makeStyles((theme) => ({
    sidebarRoot: {
        marginBottom: theme.spacing(1.5),
    },
    name: {
        fontWeight: "bold"
    },
    imgContainer:{
        height: "50px",
        width: "50px",
        textAlign: "center"
    },
    img: {
        height: "50px",
        width: "50px",
        borderRadius: "100%"
    },
    others: {
        fontSize: "11px",
        width: "80%"
    }
}))

export default function SideBarItem({name, category, followers, image}) {
    const classes = useStyles();

    return (
        <div className={classes.sidebarRoot}>
            <Box paddingX={3} display="flex" justifyContent="center" alignItems="center" flexDirection="row">
                <Box width="25%" marginRight={2} className={classes.imgContainer}>
                    <img src={image} alt={name + " logo"} className={classes.img} />
                </Box>
                <Box width="100%">
                    <Box className={classes.name}>
                        {name}
                    </Box>
                    <Box className={classes.others}>
                        {category} <DotDivider /> {transformNumber(followers)} followers
                    </Box>
                </Box>
                <Box marginRight={2} backgroundColor="blue">
                    <ViewIcon color={generalBlue} />
                </Box>
            </Box>
        </div>
    )
}
