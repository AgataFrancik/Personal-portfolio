import React from 'react'
import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

export const AboutMe = () => {
  return (
    <section className='AboutMe' id="home">
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Witam w portfolio!</span>
                    <h1>{'Napis jakiś'}<span className='wrap'>i kolejny</span></h1>
                </Col>
            </Row>
        </Container>
        </section>
  )
}
