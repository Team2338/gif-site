import './footer.scss';
import {
  GitHub,
  Instagram,
  Twitter,
  YouTube
} from '@mui/icons-material';

function Footer(props) {
    return (
        <footer className="cT">
            <div className="fL">
                <p>
                    © 2023 Gear It Forward
                </p>
            </div>
            <div className="mR">
                <ul>
                    <li><a className="sMLinks" href="https://www.instagram.com/first_2338/" target="_blank" rel="noopener noreferrer"><Instagram /></a></li>
                    <li><a className="sMLinks" href="https://twitter.com/FIRST2338" target="_blank" rel="noopener noreferrer"><Twitter /></a></li>
                    <li><a className="sMLinks" href="https://www.youtube.com/channel/UCTXN-QdYnnoBwhnHWKR7O6w" target="_blank" rel="noopener noreferrer"><YouTube /></a></li>
                    <li><a className="sMLinks" href="https://github.com/Team2338" target="_blank" rel="noopener noreferrer"><GitHub /></a></li>
                </ul>
            </div>
            <div className="fR">
                <a className="sApp" href="https://gearitforward.com/" target="_blank" rel="noopener noreferrer">Scouting App</a>
            </div>
        </footer>
    );
}

export default Footer;
