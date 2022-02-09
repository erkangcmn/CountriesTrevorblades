import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';


function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent