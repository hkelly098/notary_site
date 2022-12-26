import { createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar';
import Scheduler from './components/Scheduler';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Noto Nastaliq Urdu'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "3rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
})

function App() {
  const classes = styles(); 

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Ochoa's Mobile Notary
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Ochoa's Mobile Notary is a trusted and reliable mobile notary business serving the city of Napa
            and the surrounding areas. Our team of professional and certified notaries are available to travel to your home, 
            office, or any location of your choice to notarize your documents. Whether you need a document notarized for a real estate transaction, a power of attorney, or any other legal matter, 
            let the expertise at Ochoa's Mobile Notary handle it. 
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Schedule an appointment here or contact us at 415-123-4567 to take advantage of our convenient mobile notary services.
          </Typography>
        </div>

        <div className={classes.wrapper}>
          <Scheduler/>
        </div>
        
      </ThemeProvider>
    </div>
  );
}

export default App;
