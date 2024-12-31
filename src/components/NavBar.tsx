import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Github, Linkedin }  from 'react-bootstrap-icons';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState<String>('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value: String) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">Agata Francik</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
          <Nav.Link href="#experience" className={activeLink === "experience" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("experience")}>Experience</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/agata-francik/'><Linkedin className='icon' color='white'/></a>
                <a href='https://github.com/AgataFrancik'><Github className='icon' color='white'/></a>
            </div>
            <button className='contact-me-button' onClick={() => console.log("click")}><span>Contact me</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
