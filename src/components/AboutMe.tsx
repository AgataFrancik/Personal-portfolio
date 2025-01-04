import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import SpaceDog from "../assets/img/SpaceDog.png";

export const AboutMe = () => {
  return (
    <section className="about-me" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Hi, I'm Agata!</span>
            <h1>Software Developer</h1>
            <p>
              Here is some information about me. I earned an bachelor degree
              from Silesian Uniwersity of Science in 2023 and a master's degree
              from Wroclaw University of Science in 2024. I have been
              programming since high school, I started writing in C++, tested
              many languages, but eventually my heart was won by JavaScript.
              <br /> In my free time I write fantastic short stories, several of
              which I managed to publish. You can find the full list{" "}
              <a href="https://lubimyczytac.pl/autor/240787/agata-francik">
                here
              </a>
              . Sometimes I illustrate anthologies or create graphic designs,
              most often for blouses or mugs.{" "}
              <a href="https://www.instagram.com/gruszelrysujepiszeirobifikolki/">
                Here
              </a>{" "}
              is my instagram account with my art. I am an active person, I love
              climbing and swimming. I have been a Girl Scout for many years,
              now retired, but once very active.{" "}
            </p>
            <button
              className="contactMe-button"
              onClick={() =>
                document.getElementById("contactMe")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Contact me!
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={SpaceDog} alt="mainImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
