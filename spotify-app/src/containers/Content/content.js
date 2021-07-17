import { Box, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    contentRoot: {
        padding: '2em'
    },
    madeForYou: {
        // backgroundColor: 'white',
        color: '#ffffff',
        fontWeight: 'bold'
    },
    recommendedSection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    
    
}))

const Content = () => {

    const classes = useStyles()

    return (
        <Container maxWidth={false} className={classes.contentRoot}>
            <div className={classes.recommendedSection}>
                <Box className={classes.recommendedItemsRoot}>
                    <Typography variant="h5" className={classes.madeForYou}>Made for you</Typography>
                    <Typography component="p" style={{color: '#a0a0a0', fontSize: '0.9em'}}>Get better recommendations the more you listen.</Typography>
                </Box>
            </div>
        </Container>
    )
}

export default Content;