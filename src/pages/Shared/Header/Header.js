import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () =>{
        signOut(auth);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Car Services</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="home#services">Services</Nav.Link>
                    <Nav.Link href="home#experts">Experts</Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item to="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item to="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    {
                        user && <>
                            <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                            <Nav.Link as={Link} to="/manage">Manage Service</Nav.Link>
                            <Nav.Link as={Link} to="/orders">orders</Nav.Link>
                        </>
                    }
                    { user ? <button className='btn btn-link text-white text-decoration-none' onClick={handleSignout}>Sign out</button> : <Nav.Link as={Link} eventKey={2} to="/login">Login</Nav.Link>}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    );   



}

export default Header;