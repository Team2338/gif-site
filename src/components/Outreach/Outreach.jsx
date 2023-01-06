import './outreach.scss';
import Intro from "./Intro";
import AboutOutreach from "./Details/AboutOutreach";
import UpcomingEvents from "./Details/UpcomingEvents";
import Projects from "./Details/Projects";

function Outreach(props) {
    return (
        <div className="outreach">
            <Intro/>
            <div className="content">
                <AboutOutreach/>
                <UpcomingEvents/>
                <Projects/>
            </div>
        </div>
    );
}

export default Outreach;