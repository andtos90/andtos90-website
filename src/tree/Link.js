import React from "react";
import { LinkHorizontal, LinkVertical } from "@vx/shape";

function Link({ data, linkType, layout, orientation, stepPercent, ...props }) {
  const Link = orientation === "horizontal" ? LinkHorizontal : LinkVertical;
  return (
    <Link
      data={data}
      percent={stepPercent}
      stroke="#374469"
      strokeWidth="1"
      fill="none"
      {...props}
    />
  );
}

export default Link;
