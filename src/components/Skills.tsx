import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Star from "../assets/img/star.png";
import Star60 from "../assets/img/star-60.png";
import Star40 from "../assets/img/star-40.png";
import Star20 from "../assets/img/star-20.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container className="container">
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>My skills</h2>
              <p>
              My main focus is on learning how to create websites, but I also occasionally do backend and web design. My passion is computer graphics, so I am constantly expanding my skills.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img className="logo-img" src={Star} alt='Star'/>
                  <h5>Web Developer</h5>
                </div>
                <div className="item">
                  <img className="logo-img" src={Star60} alt='Star'/>
                  <h5>Backend Developer</h5>
                </div>
                <div className="item">
                  <img className="logo-img" src={Star40} alt='Star'/>
                  <h5>Graphic designer</h5>
                </div>
                <div className="item">
                  <img className="logo-img" src={Star20} alt='Star'/>
                  <h5>UI/UX Designer</h5>
                </div>
              </Carousel>
              <h2 className="technologies">Technologies</h2>
              <Row>
                <Col>
                  <p className="list-item">React</p>
                  <p className="list-item">JavaScript</p>
                  <p className="list-item">TypeScript</p>
                  <p className="list-item">HTML</p>
                  <p className="list-item">CSS</p>
                  <p className="list-item">Sass</p>
                </Col>
                <Col>
                    <p className="list-item">Java</p>
                    <p className="list-item">Spring Boot</p>
                    <p className="list-item">PHP</p>
                    <p className="list-item">Twig</p>
                    <p className="list-item">SQL</p>
                </Col>
                <Col>
                <p className="list-item">Figma</p>
                <p className="list-item">Photoshop</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
