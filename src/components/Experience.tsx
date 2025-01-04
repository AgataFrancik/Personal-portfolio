import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import NexiLogo from '../assets/img/nexiLogo.jpg';
import FreelanceLogo from '../assets/img/FreelanceLogo.jpg';

export const Experience = () => {
  return (
    <section className='experience' id="experience">
        <Container>
            <Row>
                <Col>
                    <h2>Experience</h2>
                    <p>Most of my commercial experience is as a Frontend Developer, but I was also Backend Developer for a while. </p>
                    <Row className='experience-list'>
                        <Col>
                            <img src={NexiLogo} alt="Nexi"/>
                        </Col>
                        <Col lg={8}>
                            <p className='experience-description'><b>Nexi Digital as Junior Frontend Developer, 04.2022 - 06.2024</b> - I was responsible for creating website with React, Typescript and CSS. We used Material UI library for styling, and Formik, Router. I was testing this website i Playwright. I was also creating backend in Java and SpringBoot.</p>
                        </Col>
                    </Row>
                    <Row className='experience-list'>
                        <Col>
                            <img src={FreelanceLogo} alt="Freelance"/>
                        </Col>
                        <Col lg={8}>
                            <p className='experience-description'><b>Freelance as Frontend Developer, 09.2024 - now</b> - as a freelancer I mostly created websites using pure TypeScript, HTML and Sass, with Bootstrap library.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
