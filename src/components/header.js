import { Link } from "gatsby";
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.scss'

const Header = () => (
    <header className="topHeader">
        <Container>
            <Navbar expand="md" variant="dark">
                <Navbar.Brand><Link to="/" className="nav-link1" activeClassName="active">HOME</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarResponsive" />
                <Navbar.Collapse id="navbarResponsive">
                    
                    <Nav as="ul" className="marginl">

                        {/* <Nav.Item as="li">
                            <Link to="/exhibitions" className="nav-link" activeClassName="active">Exhibitions</Link>
                        </Nav.Item> */}

                        <Nav.Item as="li">                                              
                                <NavDropdown title="Works" id="basic-nav-dropdown">

                                <NavDropdown.Item>
                                     <Link to="/objects" className="nav-link" activeClassName="active">Object and Design</Link>
                                    </NavDropdown.Item>


                                <NavDropdown.Item>
                                     <Link to="/analog" className="nav-link" activeClassName="active">Analog</Link>
                                    </NavDropdown.Item>

                                <NavDropdown.Item>
                                     <Link to="/trotz" className="nav-link" activeClassName="active">Trotz dem jetzt</Link>
                                    </NavDropdown.Item>


                                <NavDropdown.Item>
                                     <Link to="/3minuten" className="nav-link" activeClassName="active">3Minuten</Link>
                                    </NavDropdown.Item>

                                <NavDropdown.Item>
                                     <Link to="/aktuel" className="nav-link" activeClassName="active">Aktuel</Link>
                                    </NavDropdown.Item>


                                <NavDropdown.Item>
                                     <Link to="/konflikt" className="nav-link" activeClassName="active">Konflikt</Link>
                                    </NavDropdown.Item>

                                <NavDropdown.Item>
                                     <Link to="/location" className="nav-link" activeClassName="active">Abrisshaus in der Stargarder Straße</Link>
                                    </NavDropdown.Item>

                                <NavDropdown.Item>
                                     <Link to="/neuen" className="nav-link" activeClassName="active">Die Neuen</Link>
                                    </NavDropdown.Item>

                                <NavDropdown.Item>
                                     <Link to="/schulen" className="nav-link" activeClassName="active">Künstler an die Schulen</Link>
                                    </NavDropdown.Item>

                                <NavDropdown.Item>
                                <Link to="/danube" className="nav-link" activeClassName="active">Danube Dialogues</Link>
                                </NavDropdown.Item>
                                
                                <NavDropdown.Item>
                                <Link to="/dialog" className="nav-link" activeClassName="active">Dialog</Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                <Link to="/moleculus" className="nav-link" activeClassName="active">Molecules 10 x 10</Link>
                                </NavDropdown.Item>

                                <NavDropdown.Item>
                                <Link to="/spaces" className="nav-link" activeClassName="active">Spaces</Link>
                                </NavDropdown.Item>

                                </NavDropdown>
                        </Nav.Item>

                        {/* <Nav.Item as="li">
                            <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
                        </Nav.Item> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </header>
)

export default Header