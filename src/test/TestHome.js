import React from "react";
import "./TestHome.css";
import Top from "../components/container/Top";
import Searchbtn from "../components/search/Searchbtn";
import PictureSlider from "../components/slick/PictureSlider";
import Category from "../components/menu/Category";
import Shopping from "../store/Shopping";
import Dct from "../components/discount/Dct";
const TestHome = () => {
  return (
    <div className="testContainer">
      <div className="box">
        <div className="itemArea">
          <Top />
          <Searchbtn />
          <PictureSlider />
          <Category />
          <Dct />
          <Shopping />
        </div>
      </div>
    </div>
  );
};

export default TestHome;
