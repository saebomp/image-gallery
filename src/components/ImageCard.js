import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

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
      marginRight:'10px',
      marginBottom:'5px'
    },
    zoom: {
      display:'block',
      cursor:'pointer'
    },
    username: {
      color:'#ff5200',
      fontWeight:'bold'
    }
  });
  
const ImageCard = ({image}) => {
  const classes = useStyles();
  const tags = image.tags.split(',');

    return (
      <div>
        <Card className={classes.root}>
          <a className={classes.zoom}>
            <CardMedia
              className={classes.media}
              image={image.webformatURL}
              title=""
            />
          </a>
          <CardContent>
              <Typography variant="body1" component="p" className={classes.pb20}>Photo by <span className={classes.username}>{image.user}</span></Typography>
              <List aria-label="main mailbox folders" className={classes.list}>
                <ListItemText primary={`Views : ${image.views}`} />
                <ListItemText primary={`Downloads : ${image.downloads}`} />
                <ListItemText primary={`Likes : ${image.likes}`} />
                {/* <ListItemText primary={`${image.largeImageURL}`} /> */}
              </List>
              <div>
                {tags.map((tag, index) => (
                  <Chip key={index} label={`# ${tag}`} className={classes.chip} />
                ))}
              </div>
          </CardContent>
        </Card>
      </div>
    )
}

export default ImageCard;