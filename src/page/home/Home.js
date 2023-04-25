import React from "react";
import Top from "../../components/container/Top";
import Body from "../../body/Body";
import Searchbtn from "../../components/search/Searchbtn";
import PictureSlider from "../../components/slick/PictureSlider";
import Category from "../../components/menu/Category";
import Shopping from "../../store/Shopping";
import Dct from "../../components/discount/Dct";
import Routesearch from "../../components/searchRoute/Routesearch";
const Home = () => {
  return (
    <div>
      <Top />
      <Searchbtn />
      <PictureSlider />
      <Category />
      <Dct />
      <Shopping />
    </div>
  );
};

export default Home;
