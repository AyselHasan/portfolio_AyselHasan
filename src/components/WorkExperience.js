import React from "react";
import { Row, Col } from "antd";

function WorkExperience() {
  const infos = [
    {
      id: 1,
      title: "Təcrübə",
      interval: "09.2021 - ",
      job: "IBP.az - Front End Developer",
      desc: "Dizayna uyğun səhifələrin qurulması.",
    },
    {
      id: 2,
      title: "",
      interval: "08.2017 - 10.2017",
      job: "ASANSchool - Könüllü",
      desc: "Sorğuların alınması, vətəndaşlarla iş.",
    },
  ];

  return (
    <section id="experience">
      <div>
        {infos.map((info) => (
          <Row key={info.id}>
            <Col lg={13} md={12} s={24} xs={24} className="mt-3">
              <h2 className="alegreya f-bold">{info.title}</h2>
            </Col>
            <Col lg={11} md={12} s={24} xs={24} className="mt-3 mb-3">
              <Row>
                <Col lg={8} md={10} s={24} xs={24}>
                  <h3 className="b-regular alegreya">{info.interval}</h3>
                </Col>
                <Col lg={16} md={14} s={24} xs={24}>
                  <h3 className="f-bold alegreya">{info.job}</h3>
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
export default WorkExperience;
