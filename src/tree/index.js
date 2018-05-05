// Source: https://github.com/drcmda/react-spring/tree/master/examples/demos/tree
import React from "react";
import { ParentSize } from "@vx/responsive";

import contexts from "../contexts";
import Tree from "./Tree";
import data from "./data";

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
