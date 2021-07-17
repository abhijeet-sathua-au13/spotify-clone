import { makeStyles } from "@material-ui/core";
import TopAppBar from "../../components/TopAppBar/TopAppBar";
import Content from "../Content/content";

const useStyles = makeStyles((theme) => ({
    mainContentRoot: {
        backgroundColor: '#131213',
        minHeight: '100vh'
    }
}));

const MainContent = ({children}) => {
    const classes = useStyles();

    return (
        <div className={classes.mainContentRoot}>
            <TopAppBar />
            <Content />
        </div>
    )
}

export default MainContent;