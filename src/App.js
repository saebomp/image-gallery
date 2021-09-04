import React, {useState, useEffect} from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';


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
  },
  list: {
    color:'#666',
  },
  chip: {
    marginRight:'10px'
  }
});

function App() {
  const classes = useStyles();
  const [images, setImages]  = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardMedia
          className={classes.media}
            image="https://source.unsplash.com/random"
            title=""
          />
          <CardContent>
            <Typography variant="body1" component="p" className={classes.pb20}>Photo by John Doe</Typography>
            <List aria-label="main mailbox folders" className={classes.list}>
              <ListItemText primary="Views: 4000" />
              <ListItemText primary="Downloads: 300" />
              <ListItemText primary="Likes: 4000" />
            </List>
            <div>
              <Chip label="#Tag1" className={classes.chip} />
              <Chip label="#Tag2" className={classes.chip} />
              <Chip label="#Tag3" className={classes.chip} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;


// https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb    13:10