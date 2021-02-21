
import React from 'react';
import { Jumbotron, Button, Navbar, Form, Nav, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">NEWS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Content</Nav.Link>
                    <Nav.Link href="#">Common</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            <Jumbotron>
                <h1>BREAKING NEWS</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
  </p>
                <p>
                    <Button variant="primary">Show More News </Button>
                </p>
            </Jumbotron>
        </div>
    );
};

export default Header;