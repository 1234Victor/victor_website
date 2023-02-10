import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../icon6.png";
import AboutCard from "./AboutCard";

function About() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <AboutCard />
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img src={img} alt="about" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About;