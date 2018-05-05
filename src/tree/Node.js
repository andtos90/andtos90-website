import React, { Fragment } from "react";
import { Text } from "@vx/text";

const RootNode = ({ node, onClick, width, height }) => {
  return (
    <image
      href={node.data.img}
      width={width}
      height={height}
      y={-height / 2}
      x={-width / 2}
      onClick={onClick}
      clipPath="url(#myClip)"
    />
  );
};

const SectionNode = ({ node, onClick, width, height }) => {
  /*<rect
          height={height / 2}
          width={width / 2}
          y={-height / 4}
          x={-width / 4}
          stroke={node.data.children ? "#03c0dc" : "#26deb0"}
          strokeWidth={1}
          strokeDasharray={!node.data.children ? "2,2" : "0"}
          strokeOpacity={!node.data.children ? 0.6 : 1}
          rx={!node.data.children ? 10 : 0}
          onClick={onClick}
        />*/
  return (
    <image
      href={node.data.img}
      width={width}
      height={height}
      y={-height / 2}
      x={-width / 2}
      onClick={onClick}
    />
  );
};

const Node = ({ node, onClick }) => {
  const width = 400;
  const height = 200;
  return (
    <Fragment>
      {node.depth === 0 && <RootNode {...{ node, onClick, width, height }} />}
      {node.depth !== 0 && (
        <SectionNode {...{ node, onClick, width: 400, height: 80 }} />
      )}
      <Text style={{ pointerEvents: "none" }} width={width} scaleToFit={false}>
        {node.data.name}
      </Text>
    </Fragment>
  );
};

export default Node;
