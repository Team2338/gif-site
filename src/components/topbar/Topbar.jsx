import './topbar.scss';
import { Container, Nav, Navbar } from "react-bootstrap";


function Topbar() {
    return (
        <div className="topbar">
            <Navbar>
                <Container className="wrapper">
                    <Navbar.Brand href="#intro"><img src="assets/FRC_Logo.png" alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="names">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#team">Team</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Topbar;