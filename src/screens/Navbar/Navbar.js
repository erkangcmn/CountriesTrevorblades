import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';


function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark" className="mb-5">
            <Container>
                <Navbar.Brand href="/">Anasayfa</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/graphic">Grafik</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent