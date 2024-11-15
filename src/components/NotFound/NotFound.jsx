import './notFound.scss';
import DadBot from './DadBot_Jokes';

function NotFound(props) {
    return (
        <div className="null" id="null">
            <div className="Content">
                <div className="left">
                    <img src="imgs/2338-logo.svg" alt="2338 Logo" width="404vh" height="404vh"/>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2 className="mini">404 ERROR: <span> NOT FOUND!</span></h2>
                        <h3 className="extraMini">
                            Are you Lost? Click here to got to our homepage!
                            <br />
                            <a href="/" >Home</a>
                            <br />
                            Garrets Dad "DadBot" Has a Joke for You!
                            <br />
                            <DadBot />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;