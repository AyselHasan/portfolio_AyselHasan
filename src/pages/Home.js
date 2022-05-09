import React from "react";
import { Row, Col } from "antd";
import photo from "./../assets/img/2.JPG";
import Button from "./../components/Button";
import { motion } from "framer-motion";

const Home = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.section
      id="home"
      className=" d-flex align-center justify-center"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <Row justify="center">
        <Col lg={20} md={24} s={24} xs={24}>
          <div className="home-inner">
            <Row justify="center">
              <Col lg={12} md={12} s={18} xs={18}>
                <div className="resume-photo d-flex justify-center ">
                  <img src={photo} />
                </div>
              </Col>
              <Col lg={12} md={12} s={18} xs={18}>
                <div className="about-me">
                  <h1 className="heading-xlarge alegreya f-bold">Salam</h1>
                  <p className="alegreya f-regular">
                    Salam :) Mən Aysel Həsənli. 14 iyul 1999-cu ildə Bakı
                    şəhərində doğulmuşam. 
                  </p>
                  <Button />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </motion.section>
  );
};

export default Home;
