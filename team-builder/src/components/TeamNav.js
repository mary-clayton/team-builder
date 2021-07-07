import React from "react";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap"

function TeamNav() {
    return (
        <div>
            <Navbar className="navbar">
            <Nav>
            <NavbarBrand className="logo">TeamBuilder</NavbarBrand>
                <section className="items"> 
                <NavItem>
                    <NavLink className="nav-item" href="/"><i className="fas fa-home fa-2x"></i></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-item" href="/"><i className="far fa-bell fa-2x"></i></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-item" href="/"><i className="fas fa-sign-in-alt fa-2x"></i></NavLink>
                </NavItem>
                    </section>
            </Nav>
            </Navbar>
        </div>
    )
}
export default TeamNav;