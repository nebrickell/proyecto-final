import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Importar el ícono de cierre
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLemon } from "@fortawesome/free-solid-svg-icons";
import "../src/styles/signIn.css";

const SocialLoginButton = () => (
  <Fragment>
    <Button
      variant="contained"
      className="ezy__signup10-btn w-100 d-flex align-items-center"
      style={{
        fontFamily: "Nunito, sans-serif",
        fontWeight: 700,
        fontSize: "0.8rem",
        color: "#ffffff",
        width: "100%",
        height: "3rem",
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <span className="text-white fs-4 lh-1">
        <FontAwesomeIcon icon={faFacebook} />
      </span>
      <span className="w-100 text-center text-white">
        Continue with Facebook
      </span>
    </Button>
    <Button
      variant="contained"
      className="ezy__signup10-btn w-100 d-flex align-items-center"
      color="error"
      style={{
        fontFamily: "Nunito, sans-serif",
        fontWeight: 700,
        fontSize: "0.8rem",
        color: "#fff",
        width: "100%",
        height: "3rem",
      }}
    >
      <span className="text-white fs-4 lh-1">
        <FontAwesomeIcon icon={faGoogle} />
      </span>
      <span className="w-100 text-center text-white">Continue with Google</span>
    </Button>
  </Fragment>
);

const SignInForm = () => {
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
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      style={{
        marginTop: "3rem",
      }}
    >
      <Form.Group className="mb-4 mt-2">
        <Form.Label
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Email Address
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Email Address"
          required
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
        />
        <Form.Control.Feedback
          type="invalid"
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2 mt-2">
        <Form.Label
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Password
        </Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter Password"
          required
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
        />
        <Form.Control.Feedback
          type="invalid"
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Please provide a valid password.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          id="signin1-remember-me"
          label="Remember me"
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
        />
      </Form.Group>

      <Button
        variant="contained"
        type="submit"
        style={{
          fontFamily: "Nunito, sans-serif",
          fontWeight: 700,
          fontSize: "0.8rem",
          lineHeight: "1.5rem",
          color: "black",
          width: "100%",
          height: "3rem",
          backgroundColor: "#FCC531",
          borderColor: "#FCC531",
          marginTop: "3rem",
        }}
      >
        LogIn
      </Button>
      <Button
        variant="outlined"
        type="button"
        style={{
          marginTop: "0.5rem",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 700,
          fontSize: "0.75rem",
          width: "100%",
          height: "3rem",
          border: "none",
        }}
      >
        Forget your password?
      </Button>
    </Form>
  );
};

const SignInFormCard = () => (
  <Card className="ezy__signin1-form-card">
    <Card.Body className="p-md-5">
      <h2
        className="ezy__signin1-heading mb-4 mb-md-5"
        style={{
          fontFamily: "Nunito, sans-serif",

          lineHeight: "1.5",
          textAlign: "center",
        }}
      >
        Log In to your account
        <FontAwesomeIcon
          icon={faLemon}
          style={{ marginLeft: "1rem", color: "#FEA116" }}
        />
      </h2>
      <SignInForm />
      <div className="position-relative ezy__signin1-or-separator">
        <hr className="my-4 my-md-5" />
        <span
          className="px-2"
          style={{
            fontFamily: "Nunito, sans-serif",
          }}
        >
          Or
        </span>
      </div>
      <SocialLoginButton />
      <div className="text-center mt-4 mt-md-5">
        <p className="mb-0 opacity-50 lh-1">Don't have an account?</p>
        <Button
          variant="contained"
          onClick={() => {
            window.location.href = "/signUp";
          }}
          style={{
            marginTop: "1.4rem",
            fontFamily: "Nunito, sans-serif",
            fontWeight: 700,
            fontSize: "0.8rem",
            width: "100%",
            height: "3rem",
            color: "#fff",
          }}
        >
          Create account
        </Button>
      </div>
    </Card.Body>
  </Card>
);

const SignIn = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose} // Llamar a onClose para cerrar el diálogo
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <section
          className="ezy__signin1 light d-flex align-items-center"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <Container>
            <Row className="py-4 justify-content-center">
              <Col lg={12}>
                <SignInFormCard />
              </Col>
            </Row>
          </Container>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
