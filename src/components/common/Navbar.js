import React from 'react'
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const HeaderMenu = () => {
    return (
        <Navbar fixedTop inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">EducationOne</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                   <NavItem><IndexLink to="/" activeClassName="active">Home</IndexLink></NavItem>
                    <NavItem><Link to="/courses" activeClassName="active">Courses</Link></NavItem>
                    <NavItem><Link to="/about" activeClassName="active">About</Link></NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
};

export default HeaderMenu;