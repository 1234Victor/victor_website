import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import uoftsofa from "../../uoftsofa.png"

function Projects(){
    return(
        <Container fluid className = "project-section">
            <Container>
                <h1 style = {{color:"white"}} className = "project-head">
                    My Recent <strong className = "purple"> Works</strong>
                </h1>
                <p style = {{color:"white"}} className = "project-head">
                    Here are some projects I have worked on recently.
                </p>
                <Row style = {{justifyContent: "center", paddingBottom: "10px"}}>
                    <Col md = {4} className = "project-card">
                        <ProjectCard
                        imgPath = {uoftsofa}
                        isBlog = {false}
                        title = "UofT Sofa"
                        description = "Best app to find sofa on UofT Campus"
                        ghLink = "https://github.com/1234Victor/UofTSofa"
                        demoLink = "https://www.uoftsofa.com" 
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;