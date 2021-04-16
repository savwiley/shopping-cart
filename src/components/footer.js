import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/savwiley/shopping-cart">
        <FontAwesomeIcon icon={faGithubAlt} />
      </a>
    </div>
  );
};

export default Footer;
