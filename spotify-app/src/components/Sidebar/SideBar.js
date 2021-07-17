import { makeStyles } from "@material-ui/core";
import Navitems from "../NavItems/NavItems";
import Typography from '@material-ui/core/Typography';
import Playlist from "../Playlist/Playlist";

const useStyles = makeStyles((theme) => ({
    sideBarRoot: {
        position: 'fixed',
        left: '0px',
        width: '16.7%',
        top: '0',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#020302',
        color: '#FEFFFE',
        paddingTop: '2em',
        height: '95.2vh'
    },
    title:{
        textAlign: 'center',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '2em'
    }
}))

const SideBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.sideBarRoot}>
            <Typography variant="h4" className={classes.title}>
                <span style={{color: '#FEFFFE', marginRight: '0.2em'}}><i className="fab fa-spotify"></i></span>Spotify<span style={{fontSize: '15px'}}>&#174;</span>
            </Typography>
            <Navitems />
            <Playlist />
        </div>
    )
}

export default SideBar;