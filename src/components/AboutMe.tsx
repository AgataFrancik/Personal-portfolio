import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import SpaceDog from '../assets/img/SpaceDog.png';

export const AboutMe = () => {
  return (
    <section className='about-me' id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Witam w portfolio!</span>
                    <h1>Napis jakiś</h1>
                    <p>I tutaj coś o sobie potem wymyślisz contante, ważne, by teraz było dość długie, żeby sprawdzić jak to wygląda, czy ładnie, czy nie</p>
                    <button className='contactMe-button' onClick={() => console.log("hue hue")}>Contact me!</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={SpaceDog} alt="mainImg"/>
                </Col>
            </Row>
        </Container>
        </section>
  )
}
