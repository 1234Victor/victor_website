import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Email_generator from "../../Email_generator.png"
import HTML_Converter from "../../HTML_Converter.png"
import Music_classification from "../../Music_classification.png"

function Projects() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 style={{ color: "white" }} className="project-head">
                    My Recent <strong className="purple"> Works</strong>
                </h1>
                <p style={{ color: "white" }} className="project-head">
                    Here are some projects I have worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Email_generator}
                            isBlog={false}
                            title="Email Generator"
                            skill = "Java, JSwing"
                            description="An email generator that is able to generate emails following required format"
                            ghLink="https://github.com/1234Victor/EmailGenerator"
                            //demoLink="https://www.uoftsofa.com"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={HTML_Converter}
                            isBlog={false}
                            title="HTML Formatter"
                            skill = "Python, Tkinter, HTML"
                            description="An HTML document formatter used to format HTML file with preset requirements in one-click"
                            ghLink="https://github.com/1234Victor/HTML_Formatter"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Music_classification}
                            isBlog={false}
                            title="Music Genre Classification Deep Learning Model"
                            skill = "Python, Librosa, Pytorch"
                            description="A music genere classification deep learning model that is able to classify music into 10 different genres"
                            ghLink = "https://github.com/1234Victor"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;