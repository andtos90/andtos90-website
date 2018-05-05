import React from "react";
import { Group } from "@vx/group";
import { Tree } from "@vx/hierarchy";
import { LinearGradient } from "@vx/gradient";
import { hierarchy } from "d3-hierarchy";

import Links from "./LinksMove";
import Nodes from "./NodesSpring";

import contexts from "../contexts";

export default class extends React.Component {
  state = {
    layout: "cartesian",
    orientation: "horizontal",
    linkType: "diagonal",
    stepPercent: 0.5
  };

  _renderTree = size => {
    const {
      data,
      margin = {
        top: 100,
        left: 100,
        right: 100,
        bottom: 100
      }
    } = this.props;

    const { width, height } = size;
    const { layout, orientation, linkType, stepPercent } = this.state;

    if (width < 10) return null;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const origin = { x: 0, y: 0 };
    const sizeWidth = innerHeight;
    const sizeHeight = innerWidth;
    const root = hierarchy(data, d => (d.isExpanded ? d.children : null));

    return (
      <div>
        <svg width={width} height={height}>
          <LinearGradient id="lg" from="#fd9b93" to="#fe6e9e" />
          <defs>
            <clipPath id="myClip">
              <circle r={100} />
            </clipPath>
          </defs>
          <Tree
            top={margin.top}
            left={margin.left}
            root={root}
            size={[sizeWidth, sizeHeight]}
            separation={(a, b) => (a.parent == b.parent ? 1 : 0.5) / a.depth}
          >
            {({ data }) => (
              <Group top={origin.y} left={origin.x}>
                <Links
                  links={data.links()}
                  linkType={linkType}
                  layout={layout}
                  orientation={orientation}
                  stepPercent={stepPercent}
                />
                <Nodes
                  nodes={data.descendants()}
                  layout={layout}
                  orientation={orientation}
                  onNodeClick={node => {
                    if (!node.data.isExpanded) {
                      node.data.x0 = node.x;
                      node.data.y0 = node.y;
                    }
                    node.data.isExpanded = !node.data.isExpanded;
                    this.forceUpdate();
                  }}
                />
              </Group>
            )}
          </Tree>
        </svg>
      </div>
    );
  };

  render() {
    return (
      <contexts.TreeSize.Consumer>
        {context => this._renderTree(context)}
      </contexts.TreeSize.Consumer>
    );
  }
}
