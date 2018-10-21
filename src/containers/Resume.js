/* @flow */
import React from "react";
import { withSiteData } from "react-static";
import styled from "react-emotion";
import ReactMarkdown from "react-markdown";

import colors from "../config/colors";
import resume from "../data/resume.md";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 30px;
`;

export default withSiteData(() => (
  <Container>
    <ReactMarkdown source={resume} />
  </Container>
));
