import React from "react";
import { Row, Col } from "antd";

function Education() {
  const infos = [
    {
      id: 1,
      title: "Təhsil",
      interval: "2020-2022",
      degree: "Magistr təhsili",
      desc: "Azərbaycan Dövlət İqtisad Universiteti - Biznesin təşkili və idarə edilməsi (kibertəhlükəsizlik üzrə)",
    },
    {
      id: 2,
      title: "",
      interval: "09.2021 - 06.2022",
      degree: "Software Development",
      desc: "Code Academy",
    },
    {
      id: 3,
      title: "",
      interval: "2016-2020",
      degree: "Bakalavr təhsili",
      desc: "Bakı Dövlət Universiteti - Sosiologiya",
    },
  ];

  return (
    <section id="education">
      <div>
        {infos.map((info) => (
          <Row key={info.id}>
            <Col lg={13} md={12} s={24} xs={24} className="mt-3">
              <h2 className="alegreya f-bold">{info.title}</h2>
            </Col>
            <Col lg={11} md={12} s={24} xs={24} className="mt-3 mb-3">
              <Row>
                <Col lg={8} md={10} s={24} xs={24}>
                  <h3 className="f-regular alegreya">{info.interval}</h3>
                </Col>
                <Col lg={16} md={14} s={24} xs={24}>
                  <h3 className="f-bold alegreya">{info.degree}</h3>
                  <p className="f-regular alegreya">{info.desc}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
        <hr />
      </div>
    </section>
  );
}
export default Education;
