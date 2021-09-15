import React, {useState} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Box, Button, Container, Icon, IconButton } from '@material-ui/core';
import CustomMenuIcon from '../Others/CustomMenuIcon';
import MenuIcon from '@material-ui/icons/Menu';
import { generalBlue } from '../Constants/colorConstants';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles((theme) => ({
  appbar: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: generalBlue
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
      width: '100%',
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
      width: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80ch',
    },
  },
  notification: {
    marginLeft: theme.spacing(3)
  },
  premium: {
    backgroundColor: "orange",
    textTransform: "none",
    fontSize: "11px",
    fontWeight: "bold",
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
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
  menuButton: {
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
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
    display:"flex",
    flexDirection:"row", 
    alignItems:"center",
    justifyContent: "",
    
    // [theme.breakpoints.down('md')]: {
    //   display: "grid",
    //   gridTemplateColumns: "2fr 1fr"
    // },
    // [theme.breakpoints.down('sm')]: {
    //   gridTemplateColumns: "1fr 1fr"
    // },
  },

  box1: {
    display: "flex",
    width: "64%",
    flexDirection: "row",
    alignItems: "center"
    
  },
  box2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
      display: "none",
    }
     
  },
  boxShow: {
    display: "none",
    [theme.breakpoints.down('md')]: {
      position: "fixed",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      backgroundColor: generalBlue,
      right: 0,
      height: "100%",
      width: "45%",
      top: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  close: {
    color: "red",
    position: "relative",
    right: "0"
  }

}));

export default function TopBar() {

  const [show, setShow] = useState(false)

  const classes = useStyles();

  return (
    <div className={classes.grow}>

      <AppBar position="relative" className={classes.appbar}>
        <Toolbar classes={classes.toolbar}>
          <Container>
            <Box className={classes.box} >
              <Box className={classes.box1}>
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
              </Box>
              
              <IconButton edge="start" onClick={() => setShow(!show)} className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Box className={show ? classes.boxShow : classes.box2}>
                {show && <span onClick={() => setShow(false)} className={classes.close}><CloseIcon /></span>}
                <NotificationsIcon  className={classes.notification}/> 

                <Box className={classes.badge}>
                  <span className={classes.badgeContent}>12</span>
                  <Icon style={{ fontSize: "20px", color: "white"}} className={"far fa-comment-dots " + classes.messenger} />
                </Box>
                
                <Box display="flex" justifyItems="center">
                  <img alt="profile" width={"40px"} height={"40px"} src={"../Assets/placeholder.jpeg"} style={{ borderRadius: "3px" }}  />
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
