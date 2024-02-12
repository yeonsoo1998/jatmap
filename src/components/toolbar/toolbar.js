import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './toolbar.css';

function Toolbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container fluid>

      <a href='/'>
        <div className='toolbar-logo'>
        <img className='logo-img' src={`${
                process.env.PUBLIC_URL
              }/img/logo.png?${new Date().getTime()}`}/> {/*new Date , getTime 을 사용해 밀리초단위로 이미지 갱신*/}
          {/* //https://www.flaticon.com/kr/free-icons/" 꽃 아이콘  제작자: Freepik - Flaticon*/}
        </div>
        </a>  

        

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