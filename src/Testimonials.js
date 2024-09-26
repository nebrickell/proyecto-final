import React, { useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "../src/styles/testimonials.css";
import Testimonial1 from "../src/Images/testimonial-1.jpg";
import Testimonial2 from "../src/Images/testimonial-2.jpg";
import Testimonial3 from "../src/Images/testimonial-3.jpg";
import Testimonial4 from "../src/Images/testimonial-4.jpg";

const testimonialList = [
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "John Smith",
      designation: "Local Food Enthusiast",
      comment:
        "Little Lemon is hands down the best Mediterranean restaurant in Chicago. The food is always fresh, and the ambiance is perfect for a cozy dinner. Highly recommended!",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      name: "Emily Johnson",
      designation: "Travel Blogger",
      comment:
        "I travel a lot, but Little Lemon stood out for its incredible flavors. The hummus and grilled lamb are to die for. A must-visit when in Chicago!",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      name: "David Lee",
      designation: "Food Critic",
      comment:
        "The service at Little Lemon is impeccable, and the dishes are crafted with such care. The balance of flavors is extraordinary, making it a culinary gem in the heart of the city.",
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_4.jpeg",
      name: "Sophia Brown",
      designation: "Frequent Diner",
      comment:
        "Every visit to Little Lemon is a delightful experience. The variety of Mediterranean dishes offered is exceptional, and the staff is always welcoming.",
    },
    {
      img: Testimonial2,
      name: "William Martinez",
      designation: "Local Business Owner",
      comment:
        "Little Lemon has become my go-to spot for client meetings. The food is exceptional, and the calm atmosphere makes it the perfect place for conversations.",
    },
    {
      img: Testimonial4,
      name: "Olivia Garcia",
      designation: "Event Planner",
      comment:
        "I hosted an event at Little Lemon, and everything was perfect. From the food to the service, they made sure our evening was flawless. Highly recommended for private events!",
    },
  ],
  [
    {
      img: Testimonial1,
      name: "Ava Rodriguez",
      designation: "Artist",
      comment:
        "The unique Mediterranean dishes at Little Lemon are as creative as they are delicious. I always leave feeling inspired by their beautiful presentations.",
    },
    {
      img: Testimonial3,
      name: "Liam Wilson",
      designation: "Food Blogger",
      comment:
        "I write about food all the time, and Little Lemon stands out for its authenticity and flavor. It's no wonder it's one of Chicago's best-kept secrets!",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      name: "John Smith",
      designation: "Local Food Enthusiast",
      comment:
        "Little Lemon is hands down the best Mediterranean restaurant in Chicago. The food is always fresh, and the ambiance is perfect for a cozy dinner. Highly recommended!",
    },
  ],
];

const TestimonialItem = ({ testimonial }) => {
  return (
    <Row>
      {testimonial.map((item, i) => {
        const { img, name, designation, comment } = item;
        return (
          <Col
            xs={12}
            lg={4}
            key={i}
            style={{
              backgroundColor: "#F2F8FF",
            }}
          >
            <Card className="ezy__testimonial24-item border-0 p-4 mt-4">
              <Card.Body className="glassmorphism">
                <div className="d-flex align-items-center mb-4">
                  <div className="me-3">
                    <img
                      src={img}
                      alt=""
                      className="img-fluid rounded-circle border"
                      width="85"
                    />
                  </div>
                  <div>
                    <h4 className="mb-1 fs-4">{name}</h4>
                    <p
                      className="mb-0"
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      {designation}
                    </p>
                  </div>
                </div>
                <p
                  className="opacity-75"
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "14px",
                    fontWeight: "600",
                    lineHeight: "1.7",
                  }}
                >
                  {comment}
                </p>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

TestimonialItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const Testimonial24 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section
      className="ezy__testimonial24 light"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <Container
        style={{
          marginTop: "-2rem",
        }}
      >
        <Row className="align-items-center justify-content-between mb-4 mb-md-5">
          <Col xs={12} className="text-center">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal testi-h5">
              Testimonial
            </h5>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </Col>
        </Row>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={true}
          style={{
            marginTop: "-3rem",
          }}
        >
          {testimonialList.map((testimonial, i) => (
            <Carousel.Item key={i}>
              <TestimonialItem testimonial={testimonial} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonial24;
