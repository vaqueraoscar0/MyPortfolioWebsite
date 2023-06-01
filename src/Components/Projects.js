import Container from "react-bootstrap/Container";
import {Col, Nav, Row, Tab} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import {projects, projects2} from "./ProfileData/UserInfo";
import colorSharp2 from '../Assets/img/color-sharp2.png'
import TrackVisibility from "react-on-screen";
import colorSharp from "../Assets/img/color-sharp.png";
import React from "react";


export default function Projects(){

    return(
        <section className={'project'} id={"projects"}>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible? "" : ""}>
                                    <h2 className={'project-title'}>Projects</h2>
                                    <p style={{width: '90%'}}>
                                        Thank you for visiting my projects showcase! This section is
                                        dedicated to highlighting some of the projects I've had the privilege to work on.
                                        These projects represent my ongoing journey in web development, where I have sought
                                        to push my boundaries and explore new technologies. Each project is a testament to
                                        the collaborative effort and learning experiences I've had along the way. I invite
                                        you to browse through these showcased projects, where I've aimed to deliver functional
                                        and user-friendly web solutions. I humbly present these works as a reflection of
                                        my passion for creating meaningful and engaging digital experiences.
                                    </p>
                                    <Tab.Container id={'projects-tabs'} defaultActiveKey={'first'}>
                                    <Nav  id={'pills-tab'} variant="pills" defaultActiveKey="/home" className={'nav-pills mb-5 justify-content-center align-items-center '}>
                                        <Nav.Item>
                                            <Nav.Link eventKey={'first'}>Front-End</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey={'second'}>Full-Stack</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">Other</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row className={'project-row'}>
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
                                        <Tab.Pane eventKey={'second'}>
                                            <Row className={'project-row'}>
                                                {
                                                    projects2.map((project, index) => {
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

                                        <Tab.Pane eventKey={'third'}>This Tab Is Still Under Construction</Tab.Pane>
                                    </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>


                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className={'background-image-left'} alt={'img5'}/>
            <img src={colorSharp2} className={'background-image-left2'} alt={'img5'}/>
            <div style={{height: "100px"}}/>
        </section>
    )
}