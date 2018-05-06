import React from "react";
import { Group } from "@vx/group";
import { Transition } from "react-spring";

import Link from "./Link";
import { findCollapsedParent } from "./utils";

function Links({ links, linkType, layout, orientation, stepPercent }) {
  return (
    <Group>
      <Transition
        items={links}
        keys={d => `${d.source.data.name}_${d.target.data.name}`}
        from={({ source, target }) => ({
          sx: source.data.x0,
          sy: source.data.y0,
          tx: source.data.x0,
          ty: source.data.y0
        })}
        enter={({ source, target }) => ({
          sx: source.x,
          sy: source.y,
          tx: target.x,
          ty: target.y
        })}
        update={({ source, target }) => ({
          sx: source.x,
          sy: source.y,
          tx: target.x,
          ty: target.y
        })}
        leave={({ source, target }) => {
          let x = 0,
            y = 0;
          if (source != null) {
            const collapsedParent = findCollapsedParent(source);
            if (collapsedParent != null) {
              x = collapsedParent.data.x0;
              y = collapsedParent.data.y0;
            }
          }
          return {
            sx: x,
            sy: y,
            tx: x,
            ty: y
          };
        }}
      >
        {links.map(link => styles => (
          <Link
            data={{
              source: { x: styles.sx, y: styles.sy },
              target: { x: styles.tx, y: styles.ty }
            }}
            linkType={linkType}
            layout={layout}
            orientation={orientation}
            stepPercent={stepPercent}
            stroke="#374469"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </Transition>
    </Group>
  );
}

export default Links;
