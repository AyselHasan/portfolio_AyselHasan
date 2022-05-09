import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring'

const Button = () => {
  const isTablet = useMediaQuery({ query: "(max-width:767px)" });
  const buttons = [
    { id: 1, content: "CV", style: "resume", link: "/resume" },
    { id: 2, content: "Layihələr", style: "projects", link: "/projects" },
    { id: 3, content: "Əlaqə", style: "contact", link: "/contact" },
  ];
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: {duration: 1000} })
  return (
    <animated.section
      className={isTablet ? "buttons d-flex justify-center" : "buttons d-flex"}
    >
      {buttons.map((button) => (
        <Link to={button.link}>
          <button
          style={props}
            key={button.id}
            id={button.style}
            className="h-btn alegreya f-bold mt-5"
          >
            {button.content}
          </button>
        </Link>
      ))}
    </animated.section>
  );
};
export default Button;
