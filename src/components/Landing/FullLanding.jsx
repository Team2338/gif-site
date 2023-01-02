import './fullLanding.scss';
import Landing from "./MainLanding/Landing";
import Details from "./Details/Details";

function FullLanding(props) {
    return (
        <div>
            <Landing />
            <Details />
        </div>
    );
}

export default FullLanding;