import React from "react";
import Button from "@mui/material/Button";
import Bruschetta from "../src/Images/bruchetta.jpg";
import GreekSalad from "../src/Images/greek-salad.jpg";
import LemonDessert from "../src/Images/lemon-dessert.png";
import Pasta from "../src/Images/pasta.jpg";
import "../src/lib/animate/animate.min.css";
import "../src/lib/bootstrap/bootstrap.min.css";
import "../src/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";

// Datos del menú
const menuItems = [
  {
    image: GreekSalad,
    title: "Greek Salad",
    price: "$5.99",
    description:
      "The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    delay: "0.1s",
  },
  {
    image: Bruschetta,
    title: "Bruschetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    delay: "0.3s",
  },
  {
    image: LemonDessert,
    title: "Lemon Dessert",
    price: "$5.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    delay: "0.5s",
  },
  {
    image: Pasta,
    title: "Pasta",
    price: "$5.99",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    delay: "0.7s",
  },
];

function Main() {
  return (
    <div className="container-xxl pt-5 pb-3" id="menu">
      <div className="container">
        <div className="text-left wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="title-main">Food Menu</h5>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              marginTop: "0.3rem",
              marginBottom: "4rem",
              gap: "1rem",
            }}
          >
            <h1
              style={{
                marginBottom: "0rem",
                fontSize: "calc(1.375rem + 1.5vw)",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "800",
                lineHeight: "1.2",
                color: "#0f172b",
                boxSizing: "border-box",
                marginTop: "0rem",
                display: "block",
              }}
            >
              This week's specials!
            </h1>
            <Button
              variant="contained"
              className="button_main"
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
              Online Menu
            </Button>
          </div>
        </div>
        <div className="row justify-content-evenly g-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`col-xl-3 col-md-5 wow fadeInUp`}
              data-wow-delay={item.delay}
            >
              <div className="team-item text-center rounded overflow-hidden">
                <div className="image-container">
                  <img
                    className="image-main"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="container-title-main">
                  <h5 className="title-image">
                    {item.title}
                    <h5 className="h5-title-image">{item.price}</h5>
                  </h5>
                </div>
                <div className="container-p-main">
                  <small className="p-image">{item.description}</small>
                </div>
                <div className="order-main">
                  <Button>
                    <h5>Order a Delivery</h5>{" "}
                    <FontAwesomeIcon
                      icon={faPersonBiking}
                      className="icon-order-main"
                    />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
