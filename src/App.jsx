import './app.scss';
import FullLanding from "./components/Landing/FullLanding";
import Subteams from "./components/Subteams/Subteams";
import Outreach from "./components/Outreach/Outreach";
import Robots from "./components/Robots/Robots";
import Sponsors from "./components/Sponsors/Sponsors";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Resources from "./components/Resources/Resources";
import {useEffect} from "react";


function App() {

  const[red, green, blue] = [0, 36, 62]
  const section = document.querySelector('.App')
  const listenScrollEvent = (event) => {
    const y = 1 + (window.scrollY || window.pageYOffset) / 800
    const [r, g, b] = [red / y, green / y, blue / y].map(Math.round)
    section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
  }, [])

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
    case "/sponsors":
      Component = Sponsors;
      break;
    case "/contact":
      Component = Contact;
      break;
    case "/resources":
      Component = Resources;
      break;
    default:
      Component = NotFound;
      break;
  }

  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Component />
        <Footer />
      </div>
    </div>
  );
}

export default App;
