import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Box, Button, Container, Icon } from '@material-ui/core';
import CustomMenuIcon from '../Others/CustomMenuIcon';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    
  }, 
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width: '80ch',
      // '&:focus': {
      //   width: '81ch',
      // },
    },
    [theme.breakpoints.down('sm')]: {
      width: '40ch',
    },
  },
  notification: {
    marginLeft: theme.spacing(3)
  },
  premium: {
    backgroundColor: "orange",
    textTransform: "none",
    fontSize: "11px",
    fontWeight: "bold"
  },
  messenger: {
    backgroundColor: "inherit",
    margin: theme.spacing(0, 3, 0, 3),
  },
  menuIcon: {
    opacity: 0.8,
    border:"1px solid white", 
    borderRadius:"3px",
    padding: theme.spacing(1),
    margin: theme.spacing(0, 3, 0, 3),
  }, 
  badge: {
    position: "relative",
  },
  badgeContent: {
    position: "absolute",
    top: "-6px",
    left: "36px",
    backgroundColor: "red",
    height: "15px",
    width: "20px",
    borderRadius: "50%",
    fontSize:"10px",
    textAlign:"center"
  },
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "row"
    // [theme.breakpoints.down('md')]: {
    //   margin: theme.spacing(0, 3),
    // },
    // [theme.breakpoints.down('sm')]: {
    //     margin: theme.spacing(0, 2),
    // },
    // [theme.breakpoints.down('xs')]: {
    //     margin: theme.spacing(0, 1),
    // },
    //   display: "none"
    // 
  }

}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>

      <AppBar position="relative">
        <Toolbar classes={classes.toolbar}>
          <Container>
            <Box display="flex" flexDirection="row" alignItems="center">
              <LinkedInIcon fontSize="large" />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <Box className={classes.box}>
                <NotificationsIcon  className={classes.notification}/> 

                <Box className={classes.badge}>
                  <span className={classes.badgeContent}>12</span>
                  <Icon style={{ fontSize: "20px", color: "white"}} className={"far fa-comment-dots " + classes.messenger} />
                </Box>
                
                <Box display="flex" justifyItems="center">
                  <img width={"40px"} height={"40px"} src={"../Assets/placeholder.jpeg"} style={{ borderRadius: "3px" }}  />
                </Box>

                <Box className={classes.menuIcon}>
                  <CustomMenuIcon />
                </Box>

                <Button variant="contained" className={classes.premium}>
                  <Box fontFamily={"poppins"}>Upgrade to Premium</Box>
                </Button> 
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
