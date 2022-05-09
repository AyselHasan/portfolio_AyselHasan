import React, { useState } from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 706px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 432px)" });

  return (
    <div className="navbar d-flex">
      <div className="nav-content d-flex justify-space-between">
        <div className=" d-flex flex-row align-center ">
          <div className="nav-box"></div>
          <Link to="./">
            <button className="btn">
              <span className="alegreya f-bold nav-brand ml-4">
                AYSEL HASANLI
              </span>
            </button>
          </Link>
          <span
            className={
              isMobile
                ? "alegreya f-regular ml-3 d-none"
                : "alegreya f-regular ml-3"
            }
          >
            Front End Developer
          </span>
        </div>
        <div className="d-flex align-center">
          <ul
            className={
              isMediumScreen ? "list-unstyled d-none" : "list-unstyled d-flex"
            }
          >
            <li>
              <Link to="./resume">
                <Button
                  className="nav-btn f-regular alegreya mt-3"
                  type="default"
                >
                  CV
                </Button>
              </Link>
            </li>
            <li>
              <Link to="./projects">
                <Button
                  className="nav-btn nav-hover f-regular alegreya mt-3"
                  type="default"
                >
                  LAYİHƏLƏR
                </Button>
              </Link>
            </li>
            <li>
              <Link to="./contact">
                <Button
                  className="nav-btn nav-hover f-regular alegreya mt-3"
                  type="default"
                >
                  ƏLAQƏ
                </Button>
              </Link>
            </li>
          </ul>
          <button className={isMediumScreen ? "btn" : "btn d-none"}>
            <MenuOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
