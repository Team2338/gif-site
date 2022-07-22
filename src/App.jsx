import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Bots from "./components/bots/Bots";
import './app.scss';

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Bots />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
