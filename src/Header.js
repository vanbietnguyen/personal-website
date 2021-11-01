import React from 'react';
import './bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import LinkContainer from 'react-router-bootstrap'
import Link from 'react-router-dom'




const Header = () => {
    return (
        <header>
            <Navbar bg='light' expand='lg'>
                <Container>
                    {/* <LinkContainer> */}
                        <Navbar.Brand>Van</Navbar.Brand>
                    {/* </LinkContainer> */}
                
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className="me-auto">
                            {/* <LinkContainer> */}
                                <Nav.Link>Home</Nav.Link>
                            {/* </LinkContainer> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;