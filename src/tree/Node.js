import React, { Fragment } from "react";
import { Group } from "@vx/group";
import { Text } from "@vx/text";

const RootNode = ({ node, onClick }) => {
  const height = node.data.isExpanded ? 50 : 100;
  const width = node.data.isExpanded ? 50 : 100;
  return (
    <Fragment>
      <image
        href={node.data.img}
        width={width}
        height={height}
        y={-height / 2}
        x={-width / 2}
        onClick={onClick}
        preserveAspectRatio={"xMidYMid slice"}
        clipPath="url(#myClip)"
      />
      <Text
        x={width / 2}
        className={"Node-text"}
        fill={"white"}
        style={{ pointerEvents: "none" }}
        width={width}
        scaleToFit={false}
      >
        {node.data.name}
      </Text>
    </Fragment>
  );
};

const SectionNode = ({ node, onClick }) => {
  const height = node.data.isExpanded ? 50 : 50;
  const width = node.data.isExpanded ? 200 : 50;
  return (
    <Group top={-height / 2} left={-width / 2}>
      <image
        href={node.data.img}
        width={width}
        height={height}
        onClick={onClick}
        preserveAspectRatio={"xMidYMid slice"}
      />
      <Text
        className={"Node-text"}
        fill={"white"}
        style={{ pointerEvents: "none" }}
        width={width}
        height={height}
        dy={height / 2}
        dx={width / 2}
        textAnchor={"middle"}
        verticalAnchor={"middle"}
        scaleToFit={false}
      >
        {node.data.name}
      </Text>
    </Group>
  );
};

const Node = ({ node, onClick }) => {
  return (
    <Fragment>
      {node.depth === 0 && <RootNode {...{ node, onClick }} />}
      {node.depth !== 0 && <SectionNode {...{ node, onClick }} />}
    </Fragment>
  );
};

export default Node;
