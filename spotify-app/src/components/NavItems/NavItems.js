import { makeStyles } from "@material-ui/core"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

const useStyles = makeStyles((theme) => ({
    navitemsRoot: {
        marginTop: '2em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    list:{
        width: '100%'
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        paddingLeft: '1.2em',
        color: '#FEFFFE',
        opacity: '0.7',
        "&:hover": {
            opacity: '1',
            "&::before":{
                content: '""',
                display: 'block',
                width: '5px',
                height: '100%',
                backgroundColor: '#66D26F',
                marginLeft: '-16px',
                position: 'absolute',
                opacity: '1'
            }
        },
    },
    
    listItemIcon: {
        fontSize: '1.8em',
    }
}));

const navItems = [
    {text: 'Home', icon: <HomeIcon style={{fontSize: '1.1em', color: '#FEFFFE'}}/>},
    {text: 'Search', icon: <SearchIcon style={{fontSize: '1.1em', color: '#FEFFFE'}} />},
    {text: 'Library', icon: <LibraryMusicIcon style={{fontSize: '1.1em', color: '#FEFFFE'}}/>}
]

const Navitems = () => {

    const classes = useStyles();

    return (
        <div className={classes.navitemsRoot}>
            <List className={classes.list}>
                {navItems.map((item,index) => (
                    <ListItem button={false} key={index} className={classes.listItem}>
                        <ListItemIcon className={classes.listItemIcon} >{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} style={{marginLeft: '-10px' }}/>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Navitems;