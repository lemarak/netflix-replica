import React from "react";

const Carousel = (props) => {
  const images = props.images;
  return (
    <div className="carousel">
      {images.map((elem, index) => {
        return <img src={elem} alt="images" />;
      })}
    </div>
  );
};

export default Carousel;
