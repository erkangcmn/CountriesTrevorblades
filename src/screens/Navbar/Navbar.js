import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';


function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/graphic">Continent Graphic</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent