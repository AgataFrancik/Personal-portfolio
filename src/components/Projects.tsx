import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export const Projects = () => {

    const projects = [
        {
            title: "",
            description: "",
            imgUrl: ""
        },
        {
            title: "",
            description: "",
            imgUrl: ""
        },
        {
            title: "",
            description: "",
            imgUrl: ""
        }
    ]
  return (
    <section className='projects' id="projects">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>I tu znowusz opis jakiś taki ogolny co to za projekty beda, ateraz to taki placeholder bedzie</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
