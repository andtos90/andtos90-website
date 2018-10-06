/* @flow */
import React from "react";
import { withRouteData, Link } from "react-static";

import type { Work } from "../types/Work";

type Props = {
  entry: Work
};

export default withRouteData(({ entry }: Props) => {
  return (
    <div>
      <Link to="/work/">{"<"} Back</Link>
      <br />
      <h3>{entry.title}</h3>
      <p>{entry.body}</p>
    </div>
  );
});
