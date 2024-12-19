import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FooterHero from "../../components/FooterHero";
// import ContentAndroid from "../../components/ContentAndroid";
// import AndroidHeader from "../../components/AndroidHeader";
import HeaderService from "./HeaderService";
import ContentService from "./ContentService";
import ChooseService from "./ChooseService";
import SupportService from "./SupportService";

function HeaderSer() {
  return (
    <div id="home">
      <Container fluid className="p-0">
        <Row className="justify-content-center">
          <Col className="text-center">{/* Optional header content */}</Col>
        </Row>
      </Container>

      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="py-3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" id="webnavbar">
              <Nav.Link href="index.html" className="active">
                Home
              </Nav.Link>
              <NavDropdown
                title="Information Technology"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/android-app-development">
                  Android App Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/iphone-app">
                  Iphone App Development
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/digital">
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/professionalservice">
                  Managed IT Service
                </NavDropdown.Item>
                <NavDropdown
                  title="Software Development & Consulting Services"
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/softwaredevelopment">
                    SoftwareDevelopment
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/softwareSolution">
                    Software Solutions{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/websitedevelop">
                    Website Development
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 3</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 4</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 5</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Digital Markteting"
                  id="nested-nav-dropdown"
                >
                  <NavDropdown.Item href="/seo">SEO </NavDropdown.Item>
                  <NavDropdown.Item href="/onlinemarketing">
                    Online Marketing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 4</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 5</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#">Dropdown 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 3</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="services.html">Domains</Nav.Link>
              <Nav.Link href="testimonials.html">IT Solutions</Nav.Link>
              <Nav.Link href="blog.html">E-Marketing</Nav.Link>
              <Nav.Link href="blog.html">Industry</Nav.Link>
              <Nav.Link href="blog.html">Company</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Dropdown 1</NavDropdown.Item>
                <NavDropdown title="Deep Dropdown" id="nested-nav-dropdown">
                  <NavDropdown.Item href="#">Deep Dropdown 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 2</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 3</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 4</NavDropdown.Item>
                  <NavDropdown.Item href="#">Deep Dropdown 5</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Item href="#">Dropdown 2</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 3</NavDropdown.Item>
                <NavDropdown.Item href="#">Dropdown 4</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="contact.html">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HeaderService />

      {/* Content Sections */}
      <ContentService />
      <ChooseService />
      <SupportService />

      {/* Footer Sections */}
      <FooterHero />
      <Footer />
    </div>
  );
}

export default HeaderSer;
