import { makeStyles, Typography } from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((theme) => ({
    playlistRoot: {
        position: 'relative',
        marginTop:'2em',
        width: '100%',

    },
    playListItemRoot: {
        width: '100%',
        boxSizing: 'border-box',
        "&.MuiListItem-root": {
            padding: '0.3em',
            paddingLeft: '1.2em',
        },
        "&:hover": {
            "&::before":{
                content: '""',
                display: 'block',
                width: '5px',
                height: '90%',
                backgroundColor: '#66D26F',
                marginLeft: '-19px',
                position: 'absolute',
                opacity: '1'
            }
        }

    },
    playListItem: {
        "& span": {
            fontSize: '4.5em',
            cursor: 'pointer'
        },
        

    },
    addPlaylist: {
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        paddingLeft: '1.2em',
        fontSize: '0.85em',
        color: '#ffffff', opacity: '0.7',
        cursor: 'pointer',

        "&:hover": {
            opacity: '1',
        }
    }
}))

const playList = ['Area 51', 'Pop', 'Classical', 'Jazz']

const Playlist = () => {

    const classes = useStyles();

    return (
        <div className={classes.playlistRoot}>
            <Typography style={{fontSize: '0.8em', color: '#ffffff', opacity: '0.7', paddingLeft: '1.2em'}}>PLAYLISTS</Typography>
            <br/>
            <Typography className={classes.addPlaylist}><AddIcon style={{backgroundColor: '#a0a0a0', marginRight: '0.4em'}}/> Create Your Playlist</Typography>
            <List style={{marginTop: '0.4em'}}>
                {playList.map((playlistItem, index) => {
                    return (
                        <ListItem className={classes.playListItemRoot} key={index}>
                            <ListItemText primary={playlistItem} className={classes.playListItem} style={{fontSize: '3px'}}/>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default Playlist;