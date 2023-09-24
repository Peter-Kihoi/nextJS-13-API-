"use client"

import Link from "next/link"
import { Nav, Container, NavDropdown, Navbar } from "react-bootstrap"
import {usePathname} from "next/navigation"

const NavBar = () => {
    const pathname = usePathname()
    
  return (
    <div>
      <Navbar expand="lg" className="bg-primary" sticky="top" collapseOnSelect data-bs-theme="dark">
        <Container>

        <Navbar.Brand as={Link} href="/">nextJS Mestery</Navbar.Brand>
        <Navbar.Toggle aria-controls="mastery-navbar-nav" />
        <Navbar.Collapse id="mastery-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link as={Link} href="/static" active={pathname === "static"} >Static</Nav.Link>
            <Nav.Link as={Link} href="/dynamic" active={pathname === "dynamic"}>Dynamic</Nav.Link>
            <Nav.Link as={Link} href="/isr" active={pathname === "static"}>ISR</Nav.Link>
            <Nav.Link as={Link} href="/recap" active={pathname === "recap"}>RECAP</Nav.Link>

            <NavDropdown title="Topics" id="mastery-nav-dropdown">
              <NavDropdown.Item as={Link} href="/topics/coding">Coding</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/lifestyle">
                LifeStyle
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/cars">Cars</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
