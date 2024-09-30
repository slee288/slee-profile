import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <Navbar className="bg-primary text-white border-b-[#EEEEEE] px-16 py-10 font-poppins">
      <Container className="flex items-center max-w-7xl mx-auto justify-between w-full">
        <Navbar.Brand className="font-oswald font-semibold text-xl" href="#home">Sang Min Lee</Navbar.Brand>
        <Nav className="flex gap-x-12">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About Me</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;