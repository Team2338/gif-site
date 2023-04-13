import './currbot.scss';
import YouTube from 'react-youtube';
import {Button} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
function CurrBot(props) {

    return (
        <div className="currBot" id="currBot">
            <div className="Content">
                <div className="left">
                    <YouTube videoId="i8rPwPnoQRg" className="youtube"/>
                </div>
                <div className="right">

                    <div className="wrapper">
                        <h2 className="mini">Introducing our 2023 bot: <span>ZEPHYR</span></h2>
                        <h3 className="extraMini">
                            Falcon-NEO MK4 Drivebase.
                            MotionMagic Elevator.
                            Revolving Telescoping Intake.
                            <br />
                            Seven Rivers Regional Winner.
                            Top 25 Global EPA.
                        </h3>
                        <div className="buttons">
                        </div>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#7EBDC2" d="M30.4,-49.2C41,-40.5,52.4,-34.8,60.1,-25.3C67.9,-15.8,71.9,-2.4,72.6,12.2C73.2,26.8,70.4,42.7,62,55.4C53.6,68.1,39.6,77.6,24.6,80.6C9.6,83.5,-6.4,79.9,-20.6,74C-34.8,68.1,-47.2,59.9,-54.9,48.8C-62.5,37.7,-65.3,23.8,-65.2,10.7C-65.1,-2.4,-62.1,-14.7,-59.6,-30.2C-57.2,-45.7,-55.3,-64.4,-45.5,-73.6C-35.6,-82.7,-17.8,-82.3,-4,-76.1C9.9,-69.9,19.8,-58,30.4,-49.2Z" transform="translate(100 100)" />
                        </svg>
                    </div>
                    <div className="buttons">
                        <Button className="db" variant="outlined" size="large" startIcon={<GitHubIcon />} href="https://github.com/Team2338/FRC2023" target="_blank" rel="noreferrer noopener">
                            Code
                        </Button>
                        <Button className="db" variant="outlined" size="large" startIcon={<PrecisionManufacturingIcon />} href="https://docs.google.com/document/d/1k4i-t1NBsRVJFuaq7znIU7CmccQ5eBkqKWdhBfItn5Q/edit" target="_blank" rel="noreferrer noopener">
                            Mech Docs
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrBot;