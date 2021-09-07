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
    }
  });
  
const ImageCard = ({image}) => {
  const classes = useStyles();
  const tags = image.tags.split(',');

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={image.webformatURL}
                    title=""
                />
                <CardContent>
                    <Typography variant="body1" component="p" className={classes.pb20}>Photo by {image.user}</Typography>
                    <List aria-label="main mailbox folders" className={classes.list}>
                        <ListItemText primary={`Views : ${image.views}`} />
                        <ListItemText primary={`Downloads : ${image.downloads}`} />
                        <ListItemText primary={`Likes : ${image.likes}`} />
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