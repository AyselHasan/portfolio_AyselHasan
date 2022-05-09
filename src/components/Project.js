import React from "react";
import { Row, Col } from "antd";
import project1 from "./../assets/img/p1.jpg";
import project2 from "./../assets/img/p2.jpg";
import project3 from "./../assets/img/p3.jpg";

const projects = [
  {
    id: 1,
    name: "Project Name 01",
    desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    photo: project1,
  },
  {
    id: 2,
    name: "Project Name 02",
    desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    photo: project2,
  },
  {
    id: 3,
    name: "Project Name 03",
    desc: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    photo: project3,
  },
];

const Project = () => {
  return (
    <div className="mt-5">
      {projects.map((project) => (
        <Row>
          <Col lg={14} md={12} s={24} xs={24}>
            <div className="project-inner">
              <h1 className="algerya f-bold">{project.name}</h1>
              <p className="mt-2">{project.desc}</p>
            </div>
          </Col>
          <Col lg={10} md={12} s={24} xs={24}>
            <div className="project-img">
            <img src={project.photo} alt={project.name} />
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Project;
