import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../src/lib/animate/animate.min.css";
import "../src/lib/bootstrap/bootstrap.min.css";
import "../src/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import about1 from "./Images/about-1.jpg";
import about2 from "./Images/about-2.jpg";
import Button from "@mui/material/Button";

function About() {
  const { ref: counterRef1, inView: isVisible1 } = useInView({
    triggerOnce: true, // Se activa solo una vez
    threshold: 0.5, // El contador se activa cuando el 50% del elemento está visible
  });

  const { ref: counterRef2, inView: isVisible2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <about
      className="container-xxl py-5"
      id="about"
      aria-labelledby="about-title"
      style={{
        marginBottom: "1rem",
      }}
    >
      <container className="container">
        <row>
          <cols>
            <h5>About Us</h5>
            <h1>
              Welcome to our{" "}
              <FontAwesomeIcon
                icon={faUtensils}
                className="icon_about"
                aria-hidden="true"
              />{" "}
              Restaurant
            </h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
              sit. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
              Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
              stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="row-number-about">
              <div className="column-number-about">
                <div className="div-column-number-about">
                  <h1 className="h1-div-column-number-about" ref={counterRef1}>
                    {isVisible1 && (
                      <CountUp
                        start={0}
                        end={15}
                        duration={3}
                        aria-live="polite"
                      /> // Solo se activa si es visible
                    )}
                  </h1>
                  <div className="div-div-column-number-about">
                    <p className="p-div-div-column-number-about">Years of</p>
                    <h6 className="h6-div-div-column-number-about">
                      Experience
                    </h6>
                  </div>
                </div>
              </div>
              <div className="column-number-about">
                <div className="div-column-number-about">
                  <h1 className="h1-div-column-number-about" ref={counterRef2}>
                    {isVisible2 && (
                      <CountUp
                        start={0}
                        end={50}
                        duration={3}
                        aria-live="polite"
                      />
                    )}
                  </h1>
                  <div className="div-div-column-number-about">
                    <p className="p-div-div-column-number-about">Popular</p>
                    <h6 className="h6-div-div-column-number-about">
                      Master Chefs
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="button-about"
              variant="contained"
              onClick={() => {
                window.location.href = "/about-more";
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
              aria-label="Read more about us"
            >
              READ MORE
            </Button>
          </cols>
          <cols>
            <div className="images-about">
              <div className="start-images-about">
                <img
                  src={about1}
                  alt="Chefs working in the kitchen"
                  className="about1-about wow zoomIn"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "zoomIn",
                  }}
                ></img>
              </div>
              <div className="end-images-about">
                <img
                  src={about2}
                  alt="Delicious dish served at the restaurant"
                  className="about2-about wow zoomIn"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "zoomIn",
                  }}
                ></img>
              </div>
            </div>
          </cols>
        </row>
      </container>
    </about>
  );
}

export default About;
