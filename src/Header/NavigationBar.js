import { Paper, Box, makeStyles, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import React from 'react'
import HorizontalDivider from '../Others/HorizontalDivider';
import FolderSharedOutlinedIcon from '@material-ui/icons/FolderSharedOutlined';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        textAlign: 'center'
    },
    setOpacity: {
        opacity: 0.7
    },
    box:{
        justifyContent: "center",
        columnGap: theme.spacing(8),

        [theme.breakpoints.down('md')]: {
            columnGap: theme.spacing(5),
            // backgroundColor: "red"
        },
        [theme.breakpoints.down('sm')]: {
            columnGap: theme.spacing(1),
            // backgroundColor: "green",
            fontSize: "10px"
        },
        [theme.breakpoints.down('xs')]: {
            columnGap: theme.spacing(0.2),
            // backgroundColor: "green",
            fontSize: "8px"
        },

    },
    boxItem: {
        padding: theme.spacing(1, 0),
        margin: theme.spacing(0, 4),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0, 3),
        },
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0, 2),
        },
        [theme.breakpoints.down('xs')]: {
            margin: theme.spacing(0, 1),
        },
    }
}))

export default function NavigationBar() {

    const classes = useStyles();

    return (
        <Paper elevation={0}>
            <div className={classes.root + " " +  classes.setOpacity}>
                {/* <Box className={classes.boxItem} display="flex" alignItems="center" justifyContent="space-between" flexDirection="row" p={0} marginX={24}  bgcolor="background.paper" fontWeight="bold"> */}
                <Box className={classes.box} display="flex" alignItems="center" flexDirection="row" p={0} bgcolor="background.paper" fontWeight="bold">
                    <Box className={classes.boxItem}>
                        <IconButton>
                            <HomeIcon />
                        </IconButton>
                        Home
                    </Box>
                    <HorizontalDivider />
                    <Box className={classes.boxItem} >
                        <IconButton>
                            <GroupIcon />
                        </IconButton>
                        My network
                    </Box>
                    <HorizontalDivider />
                    <Box className={classes.boxItem} >
                        <IconButton>
                            <FolderSharedOutlinedIcon />
                        </IconButton>
                        Job offers
                    </Box>
                    <HorizontalDivider />
                    <Box className={classes.boxItem} >
                        <IconButton>
                            <PersonOutlinedIcon />
                        </IconButton>
                        My profile
                    </Box>
                </Box>
            </div>
        </Paper>
    )
}