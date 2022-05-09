import React from "react";
import { Row, Col } from "antd";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <section id="footer">
      <div className="footer">
        <Row>
          <Col lg={8} md={12} s={24} xs={24}>
            <h2 className="alegreya f-bold text-center">Tel:</h2>
            <h3 className="alegreya text-center">(+994) 50 360 66 75</h3>
          </Col>
          <Col lg={8} md={12} s={24} xs={24}>
            <h2 className="alegreya f-bold text-center">E-mail</h2>
            <h3 className="alegreya text-center">aiselchh@gmail.com</h3>
          </Col>
          <Col lg={8} md={12} s={24} xs={24}>
            <h2 className="alegreya f-bold text-center">Məni izləyin :)</h2>
            <h1 className="text-center">
              <GithubOutlined />
              <LinkedinOutlined className="ml-2" />
            </h1>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Footer;
