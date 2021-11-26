import React from "react";
import { Carousel } from "react-bootstrap";
import SignInButton from "./SignInButton";

const MainLanding = () => {
  const estilo = {
    backgroundColor: "rgb(0,0,0,0.7)",
  };
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://www.cdc.gov/flu/images/professionals/vaccination/team-of-confident-medical-experts-with-protective-face-masks-1024px.jpg?_=91355"
          alt="First slide"
        />
        <Carousel.Caption style={estilo}>
          <h1>Experts</h1>
          <h3>Conocimiento especializado a tu alcance</h3>
          <SignInButton />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://www.idea.org.ar/wp-content/uploads/2018/04/Finanzas-Econom%C3%ADa-y-Negocios-1024x428.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption style={estilo}>
          <h1>Experts</h1>
          <h3>Conocimiento especializado a tu alcance</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainLanding;
