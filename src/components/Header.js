import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const Header = () => {
  return(
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="/">Boca Code Pet Adoption</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adoption">Adoption</Nav.Link>
            <NavDropdown title="Health" id="basic-nav-dropdown">
              <NavDropdown.Item href="/health">Neuter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vaccines
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Microchip</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header