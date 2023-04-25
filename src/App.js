import logo from "./logo.svg";
import "./App.css";
import Top from "./container/Top";
import Body from "./body/Body";
import Searchbtn from "./search/Searchbtn";
import PictureSlider from "./slick/PictureSlider";
import Category from "./menu/Category";
import Shopping from "./store/Shopping";
import Dct from "./discount/Dct";
import Routesearch from "./searchRoute/Routesearch";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Top />
      <Searchbtn />
      <PictureSlider />
      <Category />
      <Dct />
      <Shopping />
    </div>
  );
}

export default App;
