import React, {useState, useEffect} from 'react';
import './App.css';
import ImageCard from './components/ImageCard'
import Grid from '@material-ui/core/Grid';



function App() {
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
  }, []);

  return (
    <Grid container spacing={3}>
        {images.map(image => (
      <Grid item xs={4}>
        <ImageCard key={image.id} image={image} />
      </Grid>
        ))}
    </Grid>
  );
}

export default App;


// https://www.youtube.com/watch?v=FiGmAI5e91M&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb   28:25