/* @flow */
import React from "react";
import { withSiteData } from "react-static";
import styled from "react-emotion";

import colors from "../config/colors";
import githubLogo from "../assets/images/github.svg";
import linkedinLogo from "../assets/images/linkedin.svg";
import twittterLogo from "../assets/images/twitter.svg";

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.2em;
  }

  .social-icons {
    display: flex;
    flex-direction: row;

    a {
      margin-top: 30px;
      padding: 10px;
      width: 60px;
    }
  }
`;

export default withSiteData(() => (
  <Container>
    <h1>ANDREA TOSATTO</h1>
    <p>Software Developer</p>
    <p>Passionate about teaching</p>
    <div className={`social-icons`}>
      <a target="_blank" alt={`Github`} href="https://github.com/andtos90">
        <img src={githubLogo} />
      </a>
      <a
        target="_blank"
        alt={`Linkedin`}
        href="https://www.linkedin.com/in/tosattoandrea/"
      >
        <img src={linkedinLogo} />
      </a>
      <a target="_blank" alt={`Twitter`} href="https://twitter.com/andtos90">
        <img src={twittterLogo} />
      </a>
    </div>
  </Container>
));
