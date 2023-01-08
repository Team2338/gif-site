import './navbar.scss';

function Navbar(props) {

    return (
        <div>
            <nav className='navbar'>
                <ul>
                    <li>
                        <a href="/" className="logo-nav">
                            <img src="imgs/2338-logo.svg" alt="2338 Logo" width="76" height="76"/>
                        </a>
                    </li>
                    <li>
                        <a href="/" className="title-nav">
                            <h1>Gear It Forward</h1>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li className="nav-links"><a href="/subteams">Subteams</a></li>
                    <li className="nav-links"><a href="/outreach">Outreach</a></li>
                    <li className="nav-links"><a href="/robots">Robots</a></li>
                    <li className="nav-links"><a href="/resources">Resources</a></li>
                    <li className="nav-links"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;