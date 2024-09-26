import React from "react";
import ImageHeader from "./Images/restauranfood.jpg";
import Button from "@mui/material/Button";
import "../src/lib/bootstrap/bootstrap.min.css";
import BgImage from "../src/Images/bg-hero.jpg";
import Option from "./Components/Option";
import { useState } from "react";

function Header() {
  const [openOption, setOpenOption] = useState(false);
  const handleOptionClick = () => {
    setOpenOption(true);
  };

  return (
    <>
      <div
        style={{
          padding: "0",
          position: "relative",
          width: "100%",
          marginRight: "auto",
          marginLeft: "auto",
          boxSizing: "border-box",
          display: "block",
          backgroundImage: `linear-gradient(rgba(73, 94, 87, 0.9), rgba(73, 94, 87, 0.9)), url(${BgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: "-2rem",
        }}
        role="banner" // Añadir rol de banner para indicar que es el encabezado
        aria-label="Header with restaurant information and reservation button"
      >
        <header className="container-xxl">
          <div className="container container_Header">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 text-center text-lg-start">
                <h1 className="title_Header">Little Lemon</h1>
                <h2 className="subtitle_Header">Chicago</h2>
                <p className="text_Header">
                  We are a family owned Mediterranean restaurant, focused on
                  traditional recipes served with a modern twist.
                </p>
                <Button
                  variant="contained"
                  className="button_Header"
                  onClick={handleOptionClick}
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
                  aria-label="Reserve a table"
                  role="button"
                >
                  Reserve a Table
                </Button>
              </div>
              <div
                className="col-lg-6 text-center text-lg-end overflow-hidden"
                aria-hidden="true"
              >
                <img
                  src={ImageHeader}
                  alt="Delicious Mediterranean food on a plate"
                  className="image_Header"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
      <Option open={openOption} onClose={() => setOpenOption(false)} />
    </>
  );
}

export default Header;
