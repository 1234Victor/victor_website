import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";


function blog() {
    return (
        <section>
            <Container fluid className="blog-section" id="blog">
                <container className="blog-content">
                    <Row className="blog-header">
                        <h1 style={{ color: "white" }} className="blog-heading">
                            Victor's <strong className="purple">Blog</strong>
                        </h1>
                    </Row>
                    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                        <Col md={4} className="blog-card">
                            <BlogCard

                                skill="Python"
                                title="Blog 1"
                                description="My first blog"
                                bloglink="www.weiandeng.com"
                                readingTime="5min"
                            />
                        </Col>
                    </Row>
                </container>
            </Container>
        </section>
    );
}

export default blog;