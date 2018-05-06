// Source: https://github.com/drcmda/react-spring/tree/master/examples/demos/tree
import React from "react";
import { ParentSize } from "@vx/responsive";

import contexts from "../contexts";
import Tree from "./Tree";
import data from "./data";

const setDepthKey = (node, depth = 0, key = `_0`) => {
  node.depth = depth;
  node.key = key;
  if (node.children != null) {
    let nodeCount = 0;
    for (let c of node.children) {
      setDepthKey(c, depth + 1, `${key}_${nodeCount}`);
      nodeCount++;
    }
  }
};

setDepthKey(data);

const TreeExample = () => (
  <ParentSize>
    {size => (
      <contexts.TreeSize.Provider value={size}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            background: "white"
          }}
        >
          <Tree data={data} />
        </div>
      </contexts.TreeSize.Provider>
    )}
  </ParentSize>
);

export default TreeExample;
