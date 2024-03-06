import './app.scss';
import FullLanding from "./components/Landing/FullLanding";
import Subteams from "./components/Subteams/Subteams";
import Outreach from "./components/Outreach/Outreach";
import Robots from "./components/Robots/Robots";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Resources from "./components/Resources/Resources";
import { Alert, Snackbar, SnackbarContent, useMediaQuery } from '@mui/material';



function App() {

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = FullLanding;
      break;
    case "/subteams":
      Component = Subteams;
      break;
    case "/outreach":
      Component = Outreach;
      break;
    case "/robots":
      Component = Robots;
      break;
    // case "/contact":
    //   Component = Contact;
    //   break;
    case "/resources":
      Component = Resources;
      break;
    default:
      Component = NotFound;
      break;
  }

  const smallScreen = useMediaQuery('(orientation: portrait)')

  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Component />
        <Footer />
        <Snackbar open={smallScreen}>
          <SnackbarContent message='Please rotate your device to see the content.' / >
        </Snackbar>
      </div>
    </div>
  );
}

export default App;
