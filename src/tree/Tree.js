import React from "react";
import _ from "lodash";
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
    orientation: "vertical",
    linkType: "diagonal",
    stepPercent: 0.5,
    lastExpanded: ""
  };

  _renderTree = size => {
    const {
      data,
      margin = {
        top: 50,
        left: 20,
        right: 20,
        bottom: 20
      }
    } = this.props;

    const { width, height } = size;
    const { layout, orientation, linkType, stepPercent } = this.state;

    if (width < 10) return null;

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const origin = { x: 0, y: 0 };

    let sizeWidth = innerHeight;
    let sizeHeight = innerWidth;
    if (orientation === "horizontal") {
      sizeWidth = innerHeight;
      sizeHeight = innerWidth;
    } else {
      sizeWidth = innerWidth;
      sizeHeight = innerHeight;
    }

    // Current depth
    const depth = this.state.lastExpanded
      ? this.state.lastExpanded.split("_").length - 1
      : 0;

    const treeMaxHeight = 3;

    let rootNode = data;
    for (
      let currentDepth = 1;
      currentDepth < depth - treeMaxHeight + 2;
      currentDepth++
    ) {
      const rootKey = this.state.lastExpanded.slice(0, (currentDepth + 1) * 2);
      rootNode = _.find(rootNode.children, {
        key: rootKey
      });
    }

    const root = hierarchy(rootNode, d => {
      // the node is not expanded, childrens will not be rendered
      if (!d.isExpanded) return null;

      const hasExpandedChildren = !!_.find(d.children, "isExpanded");
      // none of the children is expanded, all the childrens will be rendered
      if (!hasExpandedChildren) return d.children;
      // at least one of the children is expanded, only the expanded childrens will be rendered
      return d.children.filter(c => c.isExpanded);
    });

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
            size={[sizeWidth, root.height <= 1 ? sizeHeight / 2 : sizeHeight]}
            separation={(a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth}
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
                    if (
                      !node.data.isExpanded &&
                      node.data.children &&
                      node.data.children.length > 0
                    ) {
                      node.data.x0 = node.x;
                      node.data.y0 = node.y;
                      node.data.isExpanded = true;
                      this.setState({ lastExpanded: node.data.key });
                    } else if (node.data.isExpanded) {
                      node.data.isExpanded = false;
                      // lastExpanded node key is the selected node parent
                      let lastExpanded = node.data.key.slice(0, -2);
                      this.setState({ lastExpanded });
                    }

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
