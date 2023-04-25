import React from "react";
import "./Slider.css";
import Slider from "react-slick";

const PictureSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img
            src={
              "https://img.a-bly.com/banner/images/banner_image_1681882296377089.jpg"
            }
          ></img>
        </div>
        <div>
          <img
            src={
              "https://img.a-bly.com/banner/images/banner_image_1678183191691200.jpg"
            }
          ></img>
        </div>
        <div>
          <img
            src={
              "https://img.a-bly.com/banner/images/banner_image_1682401019169996.jpg"
            }
          ></img>
        </div>
      </Slider>
    </div>
  );
};

export default PictureSlider;
