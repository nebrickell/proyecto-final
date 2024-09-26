import React, { useState } from "react";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faLemon } from "@fortawesome/free-solid-svg-icons";
import "../src/styles/signUp.css";
import "../src/lib/bootstrap/bootstrap.min.css";
import Image2 from "../src/Images/signup-image2.jpg";
import SignIn from "./SignIn"; // Importar el componente SignIn

const monthList = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

const dayList = Array.from({ length: 31 }, (_, i) => i + 1);

const SocialLoginButton = () => (
  <>
    <Button
      variant="contained"
      className="ezy__signup10-btn w-100 d-flex align-items-center mb-3"
      style={{
        width: "100%",
        height: "50px",
        fontFamily: "Nunito, sans-serif",
        fontWeight: 700,
        fontSize: "0.8rem",
      }}
    >
      <FontAwesomeIcon icon={faFacebook} className="text-white fs-4 lh-1" />
      <span className="w-100 text-center text-white">
        Continue with Facebook
      </span>
    </Button>
    <Button
      variant="contained"
      className="ezy__signup10-btn w-100 d-flex align-items-center"
      color="error"
      style={{
        width: "100%",
        height: "50px",
        fontFamily: "Nunito, sans-serif",
        fontWeight: 700,
        fontSize: "0.8rem",
      }}
    >
      <FontAwesomeIcon icon={faGoogle} className="text-white fs-4 lh-1" />
      <span className="w-100 text-center text-white">Continue with Google</span>
    </Button>
  </>
);

const SignUpForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (
      form.checkValidity() === false ||
      formData.password !== formData.confirmPassword
    ) {
      event.stopPropagation();
    } else {
      // Form submission logic
      console.log("Form submitted successfully!");
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col lg={6}>
          <Form.Group className="mb-4" controlId="firstName">
            <Form.Label style={{ fontFamily: "Nunito, sans-serif" }}>
              First Name
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Your First Name"
              value={formData.firstName}
              onChange={handleChange}
              style={{ fontFamily: "Nunito, sans-serif" }}
            />
            <Form.Control.Feedback
              type="invalid"
              style={{
                color: "red",
              }}
            >
              Please enter your first name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-4" controlId="lastName">
            <Form.Label style={{ fontFamily: "Nunito, sans-serif" }}>
              Last Name
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Your Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={{ fontFamily: "Nunito, sans-serif" }}
            />
            <Form.Control.Feedback
              type="invalid"
              style={{
                color: "red",
              }}
            >
              Please enter your last name.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group className="mb-4">
            <Form.Label
              className="mb-2"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Birth date
            </Form.Label>
            <InputGroup>
              {/* Day, Month, and Year validation can be added based on required date logic */}
              <Form.Select
                aria-label="Day"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                <option value="">Day</option>
                {dayList.map((day) => (
                  <option value={day} key={day}>
                    {day}
                  </option>
                ))}
              </Form.Select>
              <Form.Select
                aria-label="Month"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                <option value="">Month</option>
                {monthList.map(({ label, value }) => (
                  <option value={value} key={value}>
                    {label}
                  </option>
                ))}
              </Form.Select>
              <Form.Control
                type="number"
                placeholder="Year"
                min="1900"
                max={new Date().getFullYear()}
                style={{ fontFamily: "Nunito, sans-serif" }}
              />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group className="mb-4" controlId="email">
            <Form.Label style={{ fontFamily: "Nunito, sans-serif" }}>
              Email
            </Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              style={{ fontFamily: "Nunito, sans-serif" }}
            />
            <Form.Control.Feedback
              type="invalid"
              style={{
                color: "red",
              }}
            >
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-4" controlId="password">
            <Form.Label style={{ fontFamily: "Nunito, sans-serif" }}>
              Password
            </Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              style={{ fontFamily: "Nunito, sans-serif" }}
              minLength={6}
            />
            <Form.Control.Feedback
              type="invalid"
              style={{
                color: "red",
              }}
            >
              Please enter a password with at least 6 characters.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-4" controlId="confirmPassword">
            <Form.Label style={{ fontFamily: "Nunito, sans-serif" }}>
              Confirm Password
            </Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{ fontFamily: "Nunito, sans-serif" }}
              isInvalid={formData.password !== formData.confirmPassword}
            />
            <Form.Control.Feedback
              type="invalid"
              style={{
                color: "red",
              }}
            >
              Passwords do not match.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-4">
        <Form.Check
          required
          type="checkbox"
          id="terms"
          label={
            <>
              I accept the <a href="#!">terms &amp; conditions</a> and{" "}
              <a href="#!">privacy policy</a>.
            </>
          }
          style={{ fontFamily: "Nunito, sans-serif" }}
        />
        <Form.Control.Feedback type="invalid">
          You must agree to the terms and conditions.
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        variant="contained"
        type="submit"
        className="ezy__signup10-btn-submit w-100"
        style={{
          width: "100%",
          height: "50px",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 800,
          fontSize: "0.9rem",
          color: "black",
          backgroundColor: "#FCC531",
          borderColor: "#FCC531",
        }}
      >
        Sign Up
        <FontAwesomeIcon icon={faArrowRight} className="ms-2 text-black" />
      </Button>
    </Form>
  );
};

const SignUpFormCard = () => {
  const [openSignIn, setOpenSignIn] = useState(false);
  const handleLoginClick = () => {
    setOpenSignIn(true);
  };
  return (
    <>
      <Card className="ezy__signup10-form-card">
        <Card.Body className="p-md-5">
          <h2
            className="ezy__signup10-heading mb-3"
            style={{
              fontFamily: "Nunito, sans-serif",
              textAlign: "center",
              lineHeight: "1.5",
              marginTop: "1rem",
            }}
          >
            Welcome to Little Lemon
            <FontAwesomeIcon
              icon={faLemon}
              style={{ marginLeft: "1rem", color: "#FEA116" }}
            />
          </h2>
          <p
            className="mb-4 mb-md-5"
            style={{ textAlign: "center", marginTop: "1.5rem" }}
          >
            <span
              className="mb-0 opacity-50 lh-1"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 800,
                fontSize: "0.95rem",
              }}
            >
              Already have an account?
            </span>
            <Button
              variant="contained"
              onClick={handleLoginClick}
              className="py-0 text-dark text-decoration-none"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 800,
                fontSize: "0.7rem",
                marginLeft: "0.5rem",
                height: "40px",
                backgroundColor: "#F4CE14",
                borderColor: "#F4CE14",
              }}
            >
              Sign In
            </Button>
          </p>

          <SignUpForm />

          <div className="position-relative ezy__signup10-or-separator">
            <hr className="my-4 my-md-5" />
            <span className="px-2" sx={{ fontFamily: "Nunito, sans-serif" }}>
              Or
            </span>
          </div>

          <SocialLoginButton />
        </Card.Body>
      </Card>
      <SignIn open={openSignIn} onClose={() => setOpenSignIn(false)} />
    </>
  );
};

const SignUp = () => (
  <section
    className="ezy__signup10 light d-flex"
    style={{
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
      marginTop: "1rem",
      marginBottom: "-2rem",
      backgroundColor: "transparent",
    }}
  >
    <Container>
      <Row className="justify-content-between h-100">
        <Col md={4} lg={6}>
          <div
            className="ezy__signup10-bg-holder d-none d-md-block h-100"
            style={{
              backgroundImage: `url(${Image2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Col>
        <Col md={8} lg={6} className="py-5">
          <Row className="align-items-center h-100 px-xl-5">
            <Col xs={12}>
              <SignUpFormCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
);

export default SignUp;
