import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Corgi from "../assets/img/Corgi.png";


export const ContactMe = () => {
  return (
    <section className="contactMe" id="contactMe">
      <Container className="container">
        <Row>
          <Col>
            <img src={Corgi} className="corgiImg" alt="corgiImg"/>
            <h2>Lets keep in touch!</h2>
            <p>
              If you are interested in cooperating, please send me an email to:
              agata.francik@interia.pl
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
