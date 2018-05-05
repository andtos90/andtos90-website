// Source: https://github.com/drcmda/react-spring/tree/master/examples/demos/tree
import React from "react";
import { ParentSize } from "@vx/responsive";
import Tree from "./Tree";
import data from "./data";

const TreeExample = () => (
  <ParentSize>
    {size =>
      size.ref && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            background: "white"
          }}
        >
          <Tree data={data} width={size.width} height={size.height} />
        </div>
      )
    }
  </ParentSize>
);

export default TreeExample;
