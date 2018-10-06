/* @flow */
import React from "react";
import { withRouteData, Link } from "react-static";

import type { Work } from "../types/Work";

type Props = {
  entries: Work[]
};

export default withRouteData(({ entries }: Props) => {
  return (
    <div>
      <h1>WIP</h1>
      <br />
      Entries:
      <ul>
        {entries.map(w => (
          <li key={w.id}>
            <Link to={`/work/${w.id}/`}>{w.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
