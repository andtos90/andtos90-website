export function findCollapsedParent(node) {
  if (!node) {
    return node;
  } else if (!node.data.isExpanded) {
    return node;
  } else if (node.parent) {
    return findCollapsedParent(node.parent);
  } else {
    return node.parent || node;
  }
}

export function getTopLeft(node, layout, orientation) {
  let top;
  let left;
  if (orientation === "vertical") {
    top = node.y;
    left = node.x;
  } else {
    top = node.x;
    left = node.y;
  }
  return {
    top,
    left
  };
}
