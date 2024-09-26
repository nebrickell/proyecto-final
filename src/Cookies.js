import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "../src/styles/cookies.css";

const Cookies = () => {
  return (
    <section
      className="ezy__cookies14 gray"
      style={{
        marginBottom: "-3rem",
        backgroundColor: "transparent",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={4} xl={3}>
            <Card className="ezy__cookies14-card">
              <Card.Body className="p-4">
                <div className="text-center">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/cookies.png"
                    alt=""
                    className="img-fluid mb-3 mx-auto"
                    width="100"
                    height="auto"
                  />
                  <p className="ezy__cookies14-sub-heading mb-3">
                    This website uses cookies to ensure you the best experience
                    on our website.
                  </p>
                  <a href="#!" className="ezy__cookies14-fill-btn mb-3 me-2">
                    Accept
                  </a>
                  <a href="#!" className="ezy__cookies14-btn mb-3 ms-2">
                    Reject
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cookies;
