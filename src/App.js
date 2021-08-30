import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontSize: 14,
  },
  pb20: {
    paddingBottom:20,
  }
});

function App() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
      className={classes.media}
        image="https://source.unsplash.com/random"
        title=""
      />
      <CardContent>
        <Typography variant="body2" component="p" className={classes.pb20}>Photo by John Doe</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Views: 4000</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Downloads: 300</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Likes: 4000</Typography>
      </CardContent>
    </Card>
  );
}

export default App;


// https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb    13:10