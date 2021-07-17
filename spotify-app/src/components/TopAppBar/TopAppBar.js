import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "transparent",
    boxShadow: '0px 0px 0px transparent',
    display: 'flex',
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: '#020302',
    padding: theme.spacing(1),
    "& .MuiIconButton-root ": {
      textAlign: 'center'
    }
  },
  forwardArrow: {
    "& .MuiSvgIcon-root ": {
      fontSize: '0.8em'   
    }
  },

  userButton: {
    textTransform: 'none',
    padding: '0.3em',
    borderRadius: '25px',
    backgroundColor: '#020302'
  },

  title: {
    
  },
}));

const TopAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
          <Box>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <ArrowForwardIosIcon className={classes.forwardArrow} fontWeight="lighter"/>
            </IconButton>
          </Box>
          <Button color="inherit" className={classes.userButton}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{marginRight: '0.4em', maxHeight: '1.3em', maxWidth: '1.3em'}}/>
            John Doe
            <ArrowDropDownIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopAppBar;