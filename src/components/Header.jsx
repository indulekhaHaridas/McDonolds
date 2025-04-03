import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="py-3">
      
        <Container style={{width:'100px'}}>
          {/* Logo */}
          <Navbar.Brand href="#" className="me-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732217.png"
              alt="McDonald's Logo"
              width="40"
            />
          </Navbar.Brand>
        </Container>


        <Container className=' flex-column'>

          <Container className='flex align-items-center justify-content-center '>

            <Row>
              <Col>
            
              <Nav className="me-auto d-none d-lg-flex align-items-center">
                <NavDropdown title="Language" id="language-dropdown">
                  <NavDropdown.Item href="#">English</NavDropdown.Item>
                  <NavDropdown.Item href="#">Spanish</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Sign Up for Email</Nav.Link>
                <Nav.Link href="#">Careers</Nav.Link>
              </Nav>
            </Col>

            {/* Right-side links */}
            <Col>
              <Nav className="ms-auto d-none d-lg-flex align-items-center">
                <Nav.Link href="#" className="d-flex align-items-center">
                  <FaSearch className="me-1" /> Search
                </Nav.Link>
                <Nav.Link href="#" className="text-primary">Find Your Restaurant</Nav.Link>
                <Button variant="warning">Order Now</Button>
              </Nav>
              </Col>
              </Row>
          </Container>

          {/* Center links */}
          <Container>
            <Nav className="mx-auto d-none d-lg-flex align-items-center">
              <NavDropdown title="Our Menu" id="menu-dropdown">
                <NavDropdown.Item href="#">McValue™</NavDropdown.Item>
                <NavDropdown.Item href="#">Breakfast</NavDropdown.Item>
                <NavDropdown.Item href="#">Burgers</NavDropdown.Item>
                <NavDropdown.Item href="#">Chicken & Fish</NavDropdown.Item>
                <NavDropdown.Item href="#">McNuggets®</NavDropdown.Item>
                <NavDropdown.Item href="#">Fries & Sides</NavDropdown.Item>
                <NavDropdown.Item href="#">Happy Meal®</NavDropdown.Item>
                <NavDropdown.Item href="#">McCafé® Coffees</NavDropdown.Item>
                <NavDropdown.Item href="#">Beverages</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Download App</Nav.Link>
              <Nav.Link href="#">MyMcDonald's Rewards</Nav.Link>
              <Nav.Link href="#">McValue™ & Deals</Nav.Link>
              <Nav.Link href="#">About Our Food</Nav.Link>
              <Nav.Link href="#">McDelivery</Nav.Link>
              <Nav.Link href="#">Gift Cards</Nav.Link>
            </Nav>
          </Container>
        </Container>
     
    </Navbar>
  );
}

export default Header;
