import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import MediaCard from "../../components/MediaCard/MediaCard";
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  contentRoot: {
    padding: "2em",
  },
  madeForYou: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  recommendedSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mediaCards: {
      marginTop: '1em',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexBasis: '1'
  },
  topPodcastSection: {
      marginTop: '2em',
      display: 'flex',
      flexDirection: "row",
      justifyContent: "space-between",
  }
  
}));

const Content = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} className={classes.contentRoot}>
      <div className={classes.recommendedSection}>
        <Box className={classes.recommendedItemsRoot}>
          <Typography variant="h5" className={classes.madeForYou}>
            Made for you
          </Typography>
          <Typography
            component="p"
            style={{ color: "#a0a0a0", fontSize: "0.9em" }}
          >
            Get better recommendations the more you listen.
          </Typography>
        </Box>
      </div>
      <Box className={classes.mediaCards}>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </Box>

      <div className={classes.topPodcastSection}>
      <Box className={classes.recommendedItemsRoot}>
          <Typography variant="h5" className={classes.madeForYou}>
            <Link href="#" color="inherit">
                The Top Podcasts of 2020
            </Link>
          </Typography>
          <Typography
            component="p"
            style={{ color: "#a0a0a0", fontSize: "0.9em" }}
          >
            Our favourite new shows of the year.
          </Typography>
        </Box>
      </div>
      <Box className={classes.mediaCards}>
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </Box>
    </Container>
  );
};

export default Content;
