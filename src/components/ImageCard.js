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
      marginRight:'10px'
    }
  });
  
const ImageCard = () => {
  const classes = useStyles();

    return (
        <div>
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
        </div>
    )
}

export default ImageCard;