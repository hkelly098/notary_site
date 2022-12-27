import { createTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import './App.css';
import {Route, Routes} from "react-router-dom"
import BottomNav from './components/BottonNav';

const theme = createTheme({
  palette: {
    primary: {
      main:"#060B37",
    },
    secondary: {
      main:"#D2A113",
    },
    custom: {
      main:"#3003fc",
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <BottomNav/>
      </ThemeProvider>
    </div>
  );
}

export default App;
