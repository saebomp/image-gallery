import React, {useState, useEffect} from 'react';
import './App.css';
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles,createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign:'center',
    position:'absolute',
    top:'45%',
    width:'100%'
  },
  container: {
    padding:'0 20px'
  },
  alert: {
    textAlign:'center',
    marginTop:'30px'
  }
}));

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
    },
  },
})

function App() {
  const classes = useStyles();
  const [images, setImages]  = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=> {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
      console.log(data.hits)
    })
    .catch(err => console.log(err))
  }, [term]);

  return (
    <div className={classes.container}>
      <ImageSearch searchText={(text) =>{ 
        console.log('text', text);
        setTerm(text)}}
      />
      {!isLoading && images.length === 0 &&
      <div className={classes.alert}>No Images Found</div>}

      {isLoading ? 
        <div className={classes.root}>
          <CircularProgress />
        </div>
        :  
        <Grid container spacing={3}>
          {images.map(image => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <ImageCard key={image.id} image={image} />
            </Grid>
          ))}
        </Grid>
        }
    </div>
  );
}

export default App;


// https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb  
// https://pixabay.com/api/docs/

//1.이미지 작은화면에서 적게보일것
// 2. api에서 추가할 내용 넣을것 (클릭했을때 큰 이미지 보이는것 등)
