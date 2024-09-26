import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import {
  faEnvelopeOpenText,
  faHdd,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "../src/styles/contactForm.css";

const contactInfoList = [
  {
    icon: faEnvelopeOpenText,
    label: "email@easyfrontend.com",
    href: "mailto:email@easyfrontend.com",
  },
  {
    icon: faPhoneAlt,
    label: "+880 1742-0****0",
    href: "callto:+880 1742-0****0",
  },
  { icon: faHdd, label: "easyfrontend.com", href: "easyfrontend.com" },
];

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-2">
        <Form.Control type="text" placeholder="Enter Name" />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mt-2">
        <Form.Control type="email" placeholder="Enter Email" />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} placeholder="Enter Message" />
        <Form.Control.Feedback type="valid">Message</Form.Control.Feedback>
      </Form.Group>
      <div className="text-end">
        <Button variant="primary" type="submit" className="ezy__contact9-btn">
          Submit
        </Button>
      </div>
    </Form>
  );
};

const ContactFormCard = () => (
  <Card className="ezy__contact9-form-card">
    <Card.Body className="p-md-5">
      <h2 className="ezy__contact9-heading mb-3">Contact Us</h2>
      <p className="ezy__contact9-sub-heading mb-5">
        We list your menu online, help you process orders.
      </p>

      <ContactForm />
    </Card.Body>
  </Card>
);

const ContactInfo = ({ contactInfoList }) => (
  <div className="mt-5 pt-md-4">
    {contactInfoList.map((info, i) => (
      <Card className="ezy__contact9-link mt-4" key={i}>
        <Card.Body className="d-flex align-items-center">
          <div className="fs-3 px-2 lh-1">
            <FontAwesomeIcon icon={info.icon} className="ezy__contact9-icon" />
          </div>
          <a
            className="ezy__contact9-link-content ms-4"
            href={info.href || "#!"}
          >
            {info.label}
          </a>
        </Card.Body>
      </Card>
    ))}
  </div>
);

ContactInfo.propTypes = {
  contactInfoList: PropTypes.array.isRequired,
};

const ContactUs = () => {
  return (
    <section className="ezy__contact9 light">
      <Container>
        <Row className="justify-content-between">
          <Col lg={5} className="mb-5 mb-lg-0">
            <h2 className="ezy__contact9-title mb-4 mt-0">
              How can we help you?
            </h2>
            <p className="ezy__contact9-sub-heading mb-0">
              It’s easier to reach your savings goals when you have the right
              savings account. Take a look and find the right one for you!
            </p>

            <ContactInfo contactInfoList={contactInfoList} />
          </Col>
          <Col lg={5}>
            <ContactFormCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
