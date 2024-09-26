import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "../src/styles/aboutMore.css";
import "../src/lib/animate/animate.min.css";
import About1 from "../src/Images/about1.jpeg";
import About2 from "../src/Images/about2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faLemon } from "@fortawesome/free-solid-svg-icons";

const stories = [
  {
    title: "The journey",
    description:
      "Little Lemon’s story began with a love for fresh, vibrant flavors and a dream to bring a taste of Mediterranean sunshine to Chicago. From humble beginnings, we’ve worked tirelessly to craft a dining experience that blends tradition, creativity, and community, bringing the warmth of our kitchen to your table.",
    image: About1,
  },
  {
    title: "The way to heaven",
    description:
      "At Little Lemon, we believe that the way to food heaven is through fresh ingredients, bold flavors, and unforgettable moments. Each dish is carefully crafted to take your taste buds on a journey, leaving you with a dining experience that feels nothing short of heavenly.",
    image: About2,
  },
];

const StoryItem = ({ item, index }) => {
  const { title, description, image } = item;
  return (
    <>
      <Col
        xs={12}
        md={5}
        className={`order-${index % 2 === 0 ? "2" : "1"}`}
        style={{}}
      >
        <div
          className={`d-flex flex-column justify-content-center ezy__about6-content ${
            index % 2 === 0 ? "ps-md-5" : "pe-md-5"
          }`}
        >
          <h4
            className="fw-bold mb-3 h4-next"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              fontFamily: "Pacifico, cursive",
              color: "#FEA116",
              fontSize: "calc(1rem + 1vw)",
            }}
            id={`story-title-${index}`}
          >
            {title}
            <FontAwesomeIcon
              icon={faMinus}
              size="lg"
              style={{
                marginLeft: "0.5rem",
              }}
              aria-hidden="true"
            />
          </h4>
          <p
            className="mb-0"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              fontFamily: "Nunito, sans-serif",
              fontWeight: "600",
              lineHeight: "1.85em",
              fontSize: "1.05rem",
            }}
            aria-labelledby={`story-title-${index}`}
          >
            {description}
          </p>
        </div>
      </Col>
      <Col
        xs={12}
        md={5}
        className={`${
          index % 2 === 0 ? "order-1" : "order-1 order-md-2"
        } mb-4 mb-md-0`}
      >
        <div>
          <img
            src={image}
            alt={`${title} image`}
            className="img-fluid"
            loading="lazy"
            aria-describedby={`story-title-${index}`}
            style={{
              marginTop: "2rem",
            }}
          />
        </div>
      </Col>
    </>
  );
};

StoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const AboutMore = () => {
  return (
    <section
      className="ezy__about6 light"
      id="ezy__about6"
      style={{
        marginTop: "-2rem",
        marginBottom: "-6rem",
        backgroundColor: "#F1F8FF",
        marginLeft: "0.8rem",
        marginRight: "0.8rem",
      }}
      aria-labelledby="section-title"
    >
      <Container
        style={{
          marginTop: "1.5rem",
        }}
      >
        <Row
          className="justify-content-center text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <Col xs={12} md={11}>
            <h2
              className="ezy__about6-heading fw-bold mb-4"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "calc(1.475rem + 1.5vw)",
                fontWeight: "800",
                lineHeight: "1.2",
                marginTop: "1rem",
              }}
              id="section-title"
            >
              Little Lemon’s Story
              <FontAwesomeIcon
                icon={faLemon}
                style={{ color: "#FFD43B", marginLeft: "0.5rem" }}
                aria-hidden="true"
              />
            </h2>
            <p
              className="ezy__about6-sub-heading"
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "1.05rem",
                fontWeight: "600",
                lineHeight: "1.8",
                color: "#666565",
                marginTop: "3rem",
              }}
            >
              At Little Lemon, we’re more than just a restaurant. We’re a
              community-driven establishment committed to providing exceptional
              culinary experiences while supporting local farmers and
              sustainable practices. Our mission is to bring people together
              with food that nourishes both body and soul.
            </p>
          </Col>
        </Row>

        {stories.map((item, i) => (
          <Row
            className="align-items-center justify-content-center mt-5 wow fadeInUp"
            data-wow-delay="0.1s"
            key={i}
            style={{
              color: "#495057",
              fontFamily: "Nunito, sans-serif",
              fontWeight: "400",
              lineHeight: "1.6",
              marginBottom: "7rem",
              textAlign: "center",
            }}
          >
            <StoryItem item={item} index={i + 1} />
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default AboutMore;
