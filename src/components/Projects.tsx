import React from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCard';
import comingSoon from "../assets/img/comingSoon.jpg";
import grave from "../assets/img/grave.png";
import library from "../assets/img/library.jpg";

export const Projects = () => {

    const projects = [
        {
            title: "Tomber",
            description: "Application developed in React with micro frontend technology. It is used to order grave cleaning services and locate their location on a map. The libraries used are Material UI, React Router and Axios. Keycloak was used to handle logging.",
            imgUrl: grave
        },
        {
            title: "Coming soon",
            description: "Commercial project made as freelancer. I was fully responsible for frontend and created website with pure ts, html and sass. More details coming soon.",
            imgUrl: comingSoon
        },
        {
            title: "Mobile aplication for books",
            description: (
                <>
                    Mobile application created with React Native and Firebase. The application is used for cataloging books, and storing data on books read and those marked with a “star.” In addition, the application supports video files and sounds. You can see it <a href="https://github.com/AgataFrancik/AplikacjaMobilna" target="_blank" rel="noopener noreferrer">here</a>.
                </>
            ),
            imgUrl: library
        }
    ]
  return (
    <section className='project' id="projects">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>The projects shown below are both hobby projects, created only by me, as well as group projects for studies and freelancing. The other two tabs show information about the thesis.</p>
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
                                <h2>BEng Thesis</h2>
                                <h4>Aplikacja internetowa do wspomagania opieki nad zwierzętami - Web application to support animal care
                                </h4>
                                <p>The project was defended at the Silesian University of Science, majoring in Computer Science. Developed in React along with libraries: Material UI, React Router DOM, Recharts and Axios. The server was written in C# and .NET framework with libraries: AutoMapper, Entity Framework, NLog, Fluent Validation and Jwt Bearer, and tested with the Postman tool. For security, passwords have been hashed.
                                The application provided the ability to add, delete, modify and display animals.</p>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='third'>
                            <Row>
                            <h2>Master Thesis</h2>
                            <h4>Badanie wpływu czynników środowiskowych na emocje programisty podczas procesu wytwarzania oprogramowania - Study of the impact of environmental factors on emotions of a programmer during the software development process </h4>
                            <p>The project was defended at the Wrocław University of Science, majoring in Applied Computer Science. The project was defended at the Silesian University of Technology, majoring in Applied Informatics. The project aimed to study the emotional reactions of people exposed to various factors during programming. GSR readings, facial expression (face tracking), EMG and NASA TLX and SAM self-assessment questionnaires were measured. The results were then analyzed using Python language libraries.</p>
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
