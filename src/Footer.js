import React from "react";
import "wowjs";
import "animate.css";
import "../src/lib/animate/animate.min.css";
import "../src/lib/bootstrap/bootstrap.min.css";
import "../src/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import PngLogoFooter from "../src/Images/png-logo-footer.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="container-fluid text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeIn",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Company
              <h4
                style={{
                  position: "absolute",
                  content: `""`,
                  width: "45px",
                  height: "2px",
                  top: "50%",
                  right: "-55px",
                  marginTop: "-1px",
                  backgroundColor: "#fea116",
                  boxSizing: "border-box",
                }}
              ></h4>
            </h4>
            <Link className="btn1" to="/about-more">
              <FontAwesomeIcon
                icon={faAngleRight}
                className="icon-a-col-row-footer"
              />
              About Us
            </Link>
            <a className="btn1" href="#menu">
              <FontAwesomeIcon
                icon={faAngleRight}
                className="icon-a-col-row-footer"
              />
              Online Menu
            </a>
            <a className="btn1" href="">
              <FontAwesomeIcon
                icon={faAngleRight}
                className="icon-a-col-row-footer"
              />
              Reservation
            </a>
            <Link className="btn1" to="/error">
              <FontAwesomeIcon
                icon={faAngleRight}
                className="icon-a-col-row-footer"
              />
              Privacy Policy
            </Link>
            <Link className="btn1" to="/error">
              <FontAwesomeIcon
                icon={faAngleRight}
                className="icon-a-col-row-footer"
              />
              Terms & Condition
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Contact
              <h4
                style={{
                  position: "absolute",
                  content: `""`,
                  width: "45px",
                  height: "2px",
                  top: "50%",
                  right: "-55px",
                  marginTop: "-1px",
                  backgroundColor: "#fea116",
                  boxSizing: "border-box",
                }}
              ></h4>
            </h4>
            <p className="mb-2 p-main">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="icon-a-col-row-footer"
              />
              123 Street, Chicago, USA
            </p>
            <p className="mb-2 p-main">
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className="icon-a-col-row-footer"
              />
              +012 345 67890
            </p>
            <p className="mb-2 p-main">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="icon-a-col-row-footer"
              />
              info@example.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn2" href="">
                <FontAwesomeIcon icon={faXTwitter} className="icon-btn2" />
              </a>
              <a className="btn2" href="">
                <FontAwesomeIcon icon={faFacebookF} className="icon-btn2" />
              </a>
              <a className="btn2" href="">
                <FontAwesomeIcon icon={faYoutube} className="icon-btn2" />
              </a>
              <a className="btn2" href="">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon-btn2" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Opening
              <h4
                style={{
                  position: "absolute",
                  content: `""`,
                  width: "45px",
                  height: "2px",
                  top: "50%",
                  right: "-55px",
                  marginTop: "-1px",
                  backgroundColor: "#fea116",
                  boxSizing: "border-box",
                }}
              ></h4>
            </h4>
            <h5
              style={{
                color: "#F1F8FF",
                fontWeight: "600",
                fontSize: "1.25rem",
                marginTop: "0",
                marginBottom: "0.5rem",
                fontFamily: "Nunito,sans-serif",
                boxSizing: "border-box",
                display: "block",
                lineHeight: "1.2",
              }}
            >
              Monday - Saturday
            </h5>
            <p
              style={{
                marginTop: "0",
                marginBottom: "1rem",
                boxSizing: "border-box",
                display: "block",
                fontWeight: "600",
                lineHeight: "1.7",
              }}
            >
              09AM - 09PM
            </p>
            <h5
              className="text-light fw-normal"
              style={{
                fontWeight: "700",
              }}
            >
              Sunday
            </h5>
            <p
              style={{
                marginTop: "0",
                marginBottom: "1rem",
                boxSizing: "border-box",
                display: "block",
                fontWeight: "600",
                lineHeight: "1.7",
              }}
            >
              10AM - 08PM
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Newsletter
              <h4
                style={{
                  position: "absolute",
                  content: `""`,
                  width: "45px",
                  height: "2px",
                  top: "50%",
                  right: "-55px",
                  marginTop: "-1px",
                  backgroundColor: "#fea116",
                  boxSizing: "border-box",
                }}
              ></h4>
            </h4>
            <p
              style={{
                marginTop: "0",
                marginBottom: "1rem",
                boxSizing: "border-box",
                display: "block",
                fontWeight: "600",
                lineHeight: "1.7",
              }}
            >
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-primary w-100 py-3 ps-4 pe-5 remargin"
                type="text"
                placeholder="Your email"
              />
              <Button
                className="button-remargin"
                type="button"
                style={{
                  color: "black",
                  cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  transition: ".5s",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  marginRight: "0.5rem",
                  marginTop: "0.5rem",
                  right: "0.6rem",
                  top: "0.6rem",
                  position: "absolute",
                  backgroundColor: "#F4CE14",
                  borderColor: "#F4CE14",
                  WebkitAppearance: "button",
                  display: "inline-block",
                  lineHeight: 1.5,
                  textAlign: "center",
                  verticalAlign: "middle",
                  userSelect: "none",
                  border: "1px solid transparent",
                  padding: "0.375rem 0.75rem",
                  fontSize: "1rem",
                  borderRadius: "2px",
                  margin: 0,
                  boxSizing: "border-box",
                }}
              >
                SignUp
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          style={{
            padding: "25px 0",
            borderTop: "1px solid rgba(256,256,256,.3)",
            fontSize: "15px",
            boxSizing: "border-box",
            display: "block",
          }}
        >
          <div className="container2-footer">
            <div class="column1-container2-footer">
              <img
                src={PngLogoFooter}
                style={{
                  width: "4rem",
                  height: "auto",
                  marginRight: "1rem",
                }}
              ></img>
              <p className="text-column1-container2-footer">
                ©{" "}
                <a class="bottom-column1-container2-footer" href="#">
                  Little Lemon Restaurant
                </a>
                , All Right Reserved. Designed By{" "}
                <a
                  class="bottom-column1-container2-footer"
                  href="https://htmlcodex.com"
                >
                  NicoBrickell
                </a>
              </p>
            </div>
            <div class="column2-container2-footer">
              <div
                style={{
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <Link className="a-column2-container2-footer" to="/home">
                  Home
                </Link>
                <Link className="a-column2-container2-footer" to="/cookies">
                  Cookies
                </Link>
                <Link className="a-column2-container2-footer" to="/error">
                  Help
                </Link>
                <Link
                  className="a-column2-container2-footer"
                  style={{
                    borderRight: "none",
                  }}
                  to="/faq"
                >
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
