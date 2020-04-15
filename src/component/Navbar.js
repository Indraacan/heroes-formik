import React from 'react';
import {Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Navbar1 = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Link className="navbar-brand" to="Form">Home</Link>
            <Link className="navbar-brand" to="Index">Hero List</Link>
            
        </Navbar>
    )
}
export default Navbar1;