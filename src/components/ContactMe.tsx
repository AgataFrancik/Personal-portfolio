import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Corgi from "../assets/img/Corgi.png";


export const ContactMe = () => {
  return (
    <section className="contactMe" id="contactMe">
      <Container className="container">
        <Row>
          <Col>
            <img src={Corgi} className="corgiImg"/>
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
