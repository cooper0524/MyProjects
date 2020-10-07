import React from "react";
import { Carousel } from "react-bootstrap";

const Slide = ({ src }) => {
  return (
    <Carousel className="p-2">
      {src.map((s) => (
        <Carousel.Item key={s} interval={1000}>
          <img id="homeImg" className="d-block w-100" src={s} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slide;
