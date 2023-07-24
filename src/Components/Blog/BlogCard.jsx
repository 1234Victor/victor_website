import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function BlogCard(props) {
    return (
        <Card className="blog-card-view">
            <Card.Body>
                <Card.Text style={{ textAlign: "justify" }}>
                   <span style={{ color: "#61dafb" }}>{props.skill}</span>
                </Card.Text>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    <h6>{props.description}</h6>
                </Card.Text>
                <Row>
                    <Col>
                        <Button size = "sm" variant="primary" href={props.bloglink} target="_blank" style={{ textAlign: 'left' }}>
                            Read More
                        </Button>
                    </Col>
                    <Col>
                        <Card.Text style={{ textAlign: "right" }}>
                            <span style={{ color: "#61dafb" }}>{props.readingTime}</span>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;