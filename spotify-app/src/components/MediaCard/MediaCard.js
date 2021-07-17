import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 205,
    padding: theme.spacing(2),
    backgroundColor: '#252424',
    color: '#FEFFFE'
  },
  playIcon: {
      position: 'absolute',
      top: '3.7em',
      right: '0.1em',
      
      "&.MuiSvgIcon-root": {
        fontSize: '3em',
        color: '#66D26F'
      }
  }

}));

export default function MediaCard() {
  const classes = useStyles();

  const [hover, setHover] = useState(false)

  const cardHoverHandler = () => {
      setHover(true)
  }
  const cardLeaveHandler = () => {
      setHover(false)
  }

  return (
    <Card className={classes.root} onMouseOver={cardHoverHandler} onMouseLeave={cardLeaveHandler}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://images.unsplash.com/photo-1505100119535-f14893f91436?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          title="Media"
        />
     
        {hover ? <PlayCircleFilledIcon className={classes.playIcon} style={{width: '2em'}} /> : null}
   
        <CardContent style={{padding: '0', marginTop: '0.8em'}}>
          <Typography gutterBottom variant="h5" component="h2" style={{fontSize: '1.4em'}}>
            Daily Mix 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color: '#a0a0a0', marginTop: '0.5em'}}>
           Jubin Nautiyal, Shafaqat Amanat Ali, Payal Dev and more
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
