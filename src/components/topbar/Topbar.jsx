import './topbar.scss';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Twitter, Instagram, Facebook, YouTube } from "@material-ui/icons"


function Topbar() {

    return (
        <div className="topbar">
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="assets/FRC_Logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                            Gear It Forward
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#bots">Bots</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#calendar">Calendar</Nav.Link>
                        <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                        <Nav.Link href="https://gearitforward.com/">Scouting App</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="https://www.instagram.com/first_2338/" target="_blank" rel="noreferrer noopenner"><Instagram /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://twitter.com/first2338/" target="_blank" rel="noreferrer noopenner"><Twitter /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://www.facebook.com/oswegofirst/" target="_blank" rel="noreferrer noopenner"><Facebook /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://www.youtube.com/channel/UCTXN-QdYnnoBwhnHWKR7O6w" target="_blank" rel="noreferrer noopenner"><YouTube /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Topbar;