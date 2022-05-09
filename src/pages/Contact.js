import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import Adress from "../components/Adress";
import ContactForm from "../components/ContactForm";

const Contact = () => {
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
      id="contact-section"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <section id="contact-section" className="d-flex align-center">
        <div className="contact">
          <Row>
            <Col lg={13} md={12} s={24} xs={24}>
              <Adress />
            </Col>
            <Col lg={11} md={12} s={24} xs={24}>
              <ContactForm />
            </Col>
          </Row>
        </div>
      </section>
    </motion.section>
  );
};

export default Contact;
