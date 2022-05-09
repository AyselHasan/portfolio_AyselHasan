import React from "react";
import { Row, Col } from "antd";

function Skills() {
  const infos = [
    {
      id: 1,
      title: "Bacarıqlar",
      desc: "HTML5",
    },
    {
      id: 2,
      title: "",
      desc: "CSS3/Sass/Bootstrap/AntD",
    },
    {
      id: 3,
      title: "",
      desc: "Javascript/ReactJS/React Hooks/Redux",
    },
    {
      id: 4,
      title: "",
      desc: "Version Control System(Git)",
    },
    {
      id: 5,
      title: "",
      desc: "Responsive Design",
    },
  ];

  return (
    <section id="skills">
      <div className="mt-4">
        {infos.map((info) => (
          <Row key={info.id}>
            <Col lg={15} md={12} s={24} xs={24}>
              <h2 className="alegreya f-bold">{info.title}</h2>
            </Col>
            <Col lg={9} md={12} s={24} xs={24}>
              <ul>
                <li>{info.desc}</li>
              </ul>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
}
export default Skills;
