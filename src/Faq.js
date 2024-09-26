import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons/faQuestion";
import Button from "@mui/material/Button";
import "../src/styles/faq.css";

const faqList = [
  {
    question: "Where is Little Lemon located?",
    answer:
      "Little Lemon is located in the heart of Chicago at [Exact Address], near [landmark]. You can easily find us using Google Maps.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We’re open Monday through Saturday from 09:00 a.m. to 09:00 p.m and Sunday from 10:00 a.m. to 08:00 p.m.",
  },
  {
    question: "Do I need to make a reservation?",
    answer:
      "It’s not required, but we recommend it, especially on weekends or for large groups. You can make a reservation through our website or by calling [phone number].",
  },
  {
    question: "Does Little Lemon offer vegetarian or vegan options?",
    answer:
      "Yes, we have a variety of vegetarian and vegan dishes, including fresh salads, pasta dishes, and seasonal offerings.",
  },
  {
    question: "Do you offer delivery or takeout services?",
    answer:
      "Yes, we offer both delivery and takeout. You can place your order through our website or via delivery platforms like UberEats, DoorDash, and Grubhub.",
  },
  {
    question: "Is parking available at Little Lemon?",
    answer:
      "We have limited on-site parking, and there are several public parking lots within walking distance of the restaurant.​",
  },
];

const Faq = () => {
  return (
    <section
      className="ezy__faq16 light"
      id="faq"
      style={{
        marginTop: "0.5rem",
        marginBottom: "-4rem",
        backgroundColor: "transparent",
        marginLeft: "0.8rem",
        marginRight: "0.8rem",
      }}
    >
      <Container>
        <Row>
          <Col
            xs={12}
            lg={7}
            className="text-center text-md-start ps-4 ps-lg-5"
          >
            <h2
              className="ezy__faq16-heading"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: "800",
                fontSize: "calc(1.375rem + 1.5vw)",
                lineHeight: "1.2",
              }}
            >
              Frequently Asked Questions
            </h2>
            <p
              className="ezy__faq16-sub-heading"
              style={{
                fontFamily: "Nunito,san-serif",
                fontWeight: "400",
                fontSize: "1rem",
              }}
            >
              Find answers to our most common inquiries, from reservations to
              menu options, and make the most of your Little Lemon experience!
            </p>
          </Col>
        </Row>
        <Row className="text-center text-md-start">
          {faqList.map((faq, i) => (
            <Col xs={12} md={6} lg={4} key={i}>
              <Card>
                <Card.Body className="d-flex flex-column align-items-center align-items-md-start p-4 p-lg-5">
                  <div className="ezy__faq16-card-icon d-flex justify-content-center align-items-center mb-4">
                    <FontAwesomeIcon icon={faQuestion} />
                  </div>
                  <h5
                    className="ezy__faq16-card-title mb-3"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                    }}
                  >
                    {faq.question}
                  </h5>
                  <p
                    className="ezy__faq16-card-text mb-0"
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontWeight: "400",
                      fontSize: "1rem",
                      color: "#495057",
                    }}
                  >
                    {faq.answer}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <div
              className="ezy__faq16-footer p-3 py-md-4 py-lg-5"
              style={{
                backgroundColor: "#495E57",
                marginTop: "2rem",
              }}
            >
              <h4
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: "800",
                  fontSize: "calc(1.375rem + 1.5vw)",
                  lineHeight: "1.2",
                  marginTop: "1rem",
                }}
              >
                Have any additional questions?
              </h4>
              <p
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontWeight: "400",
                  fontSize: "1rem",
                }}
              >
                Feel free to reach out to us! We’re here to help with anything
                you need, from special requests to further information.
              </p>
              <Button
                variant="contained"
                className="button_main"
                onClick={() => {
                  window.location.href = "/contactUs";
                }}
                sx={{
                  width: "192px",
                  height: "58px",
                  borderRadius: "10px",
                  backgroundColor: "#fbc531",
                  color: "black",
                  fontFamily: "Karla, sans-serif",
                  fontSize: "14px",
                  fontWeight: "600",
                  "&:hover": {
                    backgroundColor: "#e1b12c",
                  },
                }}
              >
                Get in touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
