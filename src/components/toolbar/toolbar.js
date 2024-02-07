import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './toolbar.css';

function Toolbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>
        <Navbar.Brand href="/">JatMap</Navbar.Brand>
        <div className='content-box'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Option</Nav.Link>
            <NavDropdown title="SPA">
              <NavDropdown.Item href='/spa1'>1</NavDropdown.Item>
              <NavDropdown.Item href='/spa2'>2</NavDropdown.Item>
              <NavDropdown.Item href='/spa3'>3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ACTIVITY">
              <NavDropdown.Item href="/activity1">Activity1</NavDropdown.Item>
              <NavDropdown.Item href="/activity2">Activity2</NavDropdown.Item>
              <NavDropdown.Item href="/activity3">Activity3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Toolbar;