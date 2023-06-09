import React from "react";
import "./Searchbtn.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import Routesearch from "../searchRoute/Routesearch";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
const Searchbtn = () => {
  return (
    <div className="nav">
      <div className="searchbox">
        <Link style={{ width: "100%" }} to={"/search"}>
          <div className="searchbtn">
            <AiOutlineSearch style={{ color: "gray", width: 20, height: 20 }} />
            <p className="search-write">하나만 사도 무료배송</p>
          </div>
        </Link>
        <BsCart3
          className="cart"
          style={{ width: 22, height: 22, color: "gray" }}
        />
      </div>
    </div>
  );
};

export default Searchbtn;
