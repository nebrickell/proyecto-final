import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "./Components/DatePicker";
import CarouselReservation from "./CarouselReservation";
import { Result, Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons"; // Importamos LoadingOutlined
import { ConfigProvider } from "antd";
import "../src/styles/reservation.css";

function Reservation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    people: "1 Person",
    time: "10 : 00 AM",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Estado para el spin

  useEffect(() => {
    // Desplazar hacia arriba solo cuando se haya enviado el formulario y haya terminado el spin
    if (submitted) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.firstName) formErrors.firstName = "First name is required";
    if (!formData.lastName) formErrors.lastName = "Last name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      setLoading(true); // Activar el spin

      // Simular un retraso antes de mostrar el resultado
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true); // Cambiar el estado a enviado
      }, 2000); // 2 segundos de espera simulada
    } else {
      setErrors(formErrors);
    }
  };

  // Si se ha enviado correctamente, muestra el Result de Ant Design
  if (submitted) {
    return (
      <ConfigProvider
        theme={{
          components: {
            Result: {
              subtitleFontSize: 16,
              titleFontSize: 28,
            },
          },
        }}
      >
        <Result
          status="success"
          title="Reservation Successful!"
          subTitle="Your table has been booked. We look forward to welcoming you!"
          style={{
            fontFamily: "Nunito, sans-serif",
            marginTop: "5rem",
          }}
          extra={[
            <Button
              type="primary"
              key="home"
              onClick={() => {
                window.location.href = "/home";
              }}
              style={{
                backgroundColor: "#F4CE14",
                color: "black",
                fontFamily: "Nunito, sans-serif",
                fontWeight: "bold",
                fontSize: "14px",
                height: "46px",
                width: "150px",
              }}
            >
              Go to Home
            </Button>,
          ]}
        />
      </ConfigProvider>
    );
  }

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 48,
      }}
      spin
    />
  );

  return (
    <div className="inline-reservation">
      <div
        className="auto-container-reservation"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "15px",
          width: "90%",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CarouselReservation />
        <div
          style={{
            padding: "2rem",
          }}
        >
          <div className="title-box-reservation">
            <div className="subtitle-reservation">
              <span>Reservation</span>
            </div>
            <h2 className="h2-reservation">Book a Table</h2>
            <div
              style={{
                marginTop: "1.5rem",
                fontFamily: "Nunito",
                fontSize: "1rem",
                color: "black",
                fontWeight: "600",
                lineHeight: "1.8",
              }}
            >
              <p>
                Restaurant will be open for all days, Sunday night will be
                closed. All booking payment is secured with credit card, no
                charges will be applied for online booking. No refunds.
              </p>
            </div>
            <div className="text2-reservation">
              <p>
                For any query, please call us on{" "}
                <a
                  href="tel:0000000000000"
                  style={{
                    color: "#FEA116",
                    fontFamily: "Nunito",
                    fontWeight: "700",
                  }}
                >
                  +012 345 67890
                </a>{" "}
                or fill out the order form
              </p>
            </div>
          </div>
          <div className="default-form reservation-form">
            <Spin indicator={antIcon} spinning={loading}>
              {" "}
              {/* Muestra el Spin personalizado mientras se carga */}
              <form onSubmit={handleSubmit} className="form-reservation">
                <div
                  className="row clearfix"
                  style={{
                    marginTop: "2rem",
                    borderRadius: "10px",
                    paddingTop: "1rem",
                  }}
                >
                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <div className="field-inner-reservation">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        style={{
                          border: "1px solid #495E57",
                          fontFamily: "Nunito",
                          fontSize: "16px",
                          fontWeight: "500",
                          width: "100%",
                          height: "57px",
                          borderRadius: "5px",
                          paddingLeft: "1.5rem",
                        }}
                      />
                      {errors.firstName && (
                        <p
                          style={{
                            color: "red",
                            fontFamily: "Nunito",
                            fontSize: "14px",
                            fontWeight: "500",
                            display: "flex",
                            marginTop: "0.3rem",
                            marginBottom: "0rem",
                          }}
                        >
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <div className="field-inner-reservation">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        style={{
                          border: "1px solid #495E57",
                          fontFamily: "Nunito",
                          fontSize: "16px",
                          fontWeight: "500",
                          width: "100%",
                          height: "57px",
                          borderRadius: "5px",
                          paddingLeft: "1.5rem",
                        }}
                      />
                      {errors.lastName && (
                        <p
                          style={{
                            color: "red",
                            fontFamily: "Nunito",
                            fontSize: "14px",
                            fontWeight: "500",
                            display: "flex",
                            marginTop: "0.3rem",
                            marginBottom: "0rem",
                          }}
                        >
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="form-group col-lg-4 col-md-12 col-sm-12">
                    <div className="field-inner-reservation">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          border: "1px solid #495E57",
                          fontFamily: "Nunito",
                          fontSize: "16px",
                          fontWeight: "600",
                          width: "100%",
                          height: "57px",
                          borderRadius: "5px",
                          paddingLeft: "1.5rem",
                        }}
                      />
                      {errors.email && (
                        <p
                          style={{
                            color: "red",
                            fontFamily: "Nunito",
                            fontSize: "14px",
                            fontWeight: "500",
                            display: "flex",
                            marginTop: "0.3rem",
                            marginBottom: "0rem",
                          }}
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  className="row clearfix"
                  style={{
                    marginTop: "1rem",
                    paddingTop: "1rem",
                  }}
                >
                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <div className="field-inner-reservation">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="icon1-reservation"
                      />
                      <select
                        name="people"
                        value={formData.people}
                        onChange={handleChange}
                        className="field-person-reservation"
                        style={{ paddingLeft: "2.5rem" }}
                      >
                        <option>1 Person</option>
                        <option>2 Persons</option>
                        <option>3 Persons</option>
                        <option>4 Persons</option>
                        <option>5 Persons</option>
                        <option>6 Persons</option>
                      </select>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="icon2-reservation"
                      />
                    </div>
                  </div>

                  <div className="form-group col-lg-4 col-md-6 col-sm-12">
                    <div className="field-inner-reservation">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="icon1-reservation"
                      />
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="field-person-reservation"
                        style={{ paddingLeft: "2.5rem" }}
                      >
                        <option>10 : 00 AM</option>
                        <option>11 : 00 AM</option>
                        <option>12 : 00 PM</option>
                        <option>1 : 00 PM</option>
                        <option>2 : 00 PM</option>
                        <option>3 : 00 PM</option>
                        <option>4 : 00 PM</option>
                        <option>5 : 00 PM</option>
                        <option>6 : 00 PM</option>
                      </select>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="icon2-reservation"
                      />
                    </div>
                  </div>

                  <div className="form-group col-lg-4 col-md-12 col-sm-12">
                    <DatePicker />
                  </div>
                </div>

                <div className="btn-container">
                  <button className="btn-style-one clearfix">
                    Book a Table
                  </button>
                </div>
              </form>
            </Spin>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
