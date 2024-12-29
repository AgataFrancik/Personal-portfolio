import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard';
import HtmlLogo from "../assets/img/HtmlLogo.png";
import ReactLogo from "../assets/img/React.png";
import TsLogo from "../assets/img/SassLogo.png";

export const Projects = () => {

    const projects = [
        {
            title: "Tomber",
            description: "Application developed in React with micro frontend technology. It is used to order grave cleaning services and locate their location on a map. The libraries used are Material UI, React Router and Axios. Keycloak was used to handle logging.",
            imgUrl: HtmlLogo
        },
        {
            title: "Coming soon",
            description: "Commercial project made as freelancer. I was fully responsible for frontend and created website with pure ts, html and sass. More details coming soon.",
            imgUrl: HtmlLogo
        },
        {
            title: "Mobile aplication for books",
            description: "Mobile application created with React Native and Firebase. The application is used for cataloging books, and storing data on books read and those marked with a “star.” In addition, the application supports video files and sounds. Link for project: https://github.com/AgataFrancik/AplikacjaMobilna",
            imgUrl: HtmlLogo
        }
    ]
  return (
    <section className='project' id="projects">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>I tu znowusz opis jakiś taki ogolny co to za projekty beda, ateraz to taki placeholder bedzie</p>
                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    <Nav variant='pills' className='nav-pills mb-5 justify-content-center'>
                    <Nav.Item>
                        <Nav.Link eventKey='first'>First Tab</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='second'>Second Tab</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey='third'>Third Tab</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                             />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>
                            <Row>
                                
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                            <Row>
                                
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
