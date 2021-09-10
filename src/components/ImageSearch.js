import React, {useState} from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        marginLeft: 0,
        marginTop:20,
        marginBottom:20,
        width: '100%',
        textAlign:'center',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      inputRoot: {
        color: 'inherit',
        border:'1px solid #dedede',
        borderRadius:'3px',
        marginRight:'5px',
        padding:'0px 0 3px'
      },
      inputInput: {
        // vertical padding + font size from searchIcon
        paddingLeft: 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
      btn: {
        backgroundColor:'#242582',
        color:"#fff",
        '&:hover': {
          backgroundColor: '#242582',
        },
      }
}));

const ImageSearch = ({searchText}) => {
    const classes = useStyles();
    const [text, setText] = useState('');

    const onSubmit = (e) => {
      e.preventDefault();
      searchText(text);
    }

    return (
      <div>
        <div className={classes.search}>
          <form onSubmit={onSubmit}>
            <InputBase
              onChange={e => setText(e.target.value)}
              placeholder="Search…"
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
              }}
            />
            <Button variant="contained" type="submit" className={classes.btn}>
                Search
            </Button>
          </form>
        </div>
      </div>
    )
}

export default ImageSearch;