import { Container, Grid, makeStyles } from "@material-ui/core";
import MainContent from "../MainContent/MainContent";
import SideBar from "../../components/Sidebar/SideBar";


const useStyles = makeStyles((theme) => ({
    containerRoot: {
        margin: '0px',
        padding: '0px'
    },

}))

const Layout = () => {

    const classes = useStyles()

    return (
        <Container maxWidth={false} className={classes.containerRoot}>
            <Grid container spacing={0}>
                <Grid item xs={12} md={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={12} md={10}>
                    <MainContent />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Layout;