import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <NavLink className="me-3" to="/">SkillUp</NavLink>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="me-3" to="/home">Home</NavLink>
                        <NavLink className="me-3" to="/about">About</NavLink>
                        <NavLink className="me-3" to="/service">Services</NavLink>
                        <NavLink className="me-3" to="/details">Details</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;