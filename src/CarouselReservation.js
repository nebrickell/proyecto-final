import React from "react";
import { Carousel } from "antd";
import { ConfigProvider } from "antd";
import Image2 from "../src/Images/signup-image2.jpg";
import Image1 from "../src/Images/BullBelllead.webp";
import Image3 from "../src/Images/IMG_6924-2048x1365.jpg";
import Image4 from "../src/Images/plates-of-vegan-foods-ready-serve-restaurant-London.webp";

const contentStyle = {
  height: "360px",
  lineHeight: "160px",
  textAlign: "center",
  width: "100%",
  maxWidth: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderTopLeftRadius: "15px",
  borderTopRightRadius: "15px",
};

const CarouselReservation = () => (
  <ConfigProvider
    theme={{
      components: {
        Carousel: {
          dotHeight: 12, // Cambia la altura del dot
          dotWidth: 12, // Cambia el ancho del dot
          dotOffset: 12, // Cambia el offset del dot
          colorBgContainer: "white", // Color de fondo
          colorText: "#fff", // Color del texto (no aplica a dots)
        },
      },
    }}
  >
    <Carousel
      effect="fade"
      speed={1000}
      autoplaySpeed={5000}
      autoplay
      style={{
        width: "90vw",
        maxWidth: "1200px",
        left: "-0.06rem",
        top: "-0.05rem",
      }}
    >
      <div>
        <img src={Image1} style={contentStyle} alt="Image 1" />
      </div>
      <div>
        <img src={Image2} style={contentStyle} alt="Image 2" />
      </div>
      <div>
        <img src={Image3} style={contentStyle} alt="Image 3" />
      </div>
      <div>
        <img src={Image4} style={contentStyle} alt="Image 4" />
      </div>
    </Carousel>
  </ConfigProvider>
);

export default CarouselReservation;
