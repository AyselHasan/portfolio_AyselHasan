import React, { useRef } from "react";
import { Row, Col } from "antd";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('submit_form', 'submit_templateID', form.current, 'lWkbXh5OUq5Fty7Kd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact-section" className="ContactForm">
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        <Row>
          <Col lg={11} md={24} s={24} xs={24}>
            <label className=" f-regular alegreya" htmlFor="name">
              Adınız<span className="text-red">*</span>
            </label>{" "}
            <br />
            <input
              name="name"
              className="contact-inp"
              type="text"
              id="nameInput"
              required
            />
          </Col>
          <Col lg={2}></Col>
          <Col lg={11} md={24} s={24} xs={24}>
            <label className=" f-regular alegreya" htmlFor="fname">
              Email<span className="text-red">*</span>
            </label>{" "}
            <br />
            <input
              name="email"
              className="contact-inp"
              type="email"
              id="emailInp"
              required
            />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={24} md={24} s={24} xs={24}>
            <label className=" f-regular alegreya" htmlFor="fname">
              Mesajınız<span className="text-red">*</span>
            </label>{" "}
            <br />
            <textarea
              name="message"
              id="textarea"
              className="mt-2"
              rows="4"
              required
            />
          </Col>
        </Row>
        <div className="submit-btn d-flex justify-center">
          <button
            type="submit"
            id="submit-btn"
            className="submit f-bold alegreya"
          >
            Göndər
          </button>
        </div>
      </form>
    </section>
  );
}
