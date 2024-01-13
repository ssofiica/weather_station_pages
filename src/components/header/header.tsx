import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

function Header() {
  return (
    <Navbar expand="lg" className="mynavbar" data-bs-theme="light">
      <Container>
      <Navbar.Brand href="#"> Метеостанция</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="link" to="/weather_station_pages/phenomens">Природные явления</Link>
            <Nav.Link className="link" href="#link">О станции</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;