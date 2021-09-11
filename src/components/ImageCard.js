import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      },
  }));
  
const ImageCard = ({image}) => {
  const classes = useStyles();
  const tags = image.tags.split(',');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <img src={image.largeImageURL} onClick={handleClose} />
            </div>
          </Fade>
        </Modal>
        <Card className={classes.root}>
          <a className={classes.zoom} onClick={handleOpen}>
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