/* eslint-disable */

// check if exect type
// 检查是否特定类型
function isType(item, type) {
  return Object.prototype.toString.call(item).slice(8, -1) === type;
}

// check if String type
// 检查是否 String 类型
export function isString(item) {
  return isType(item, 'String');
}

// check if Array type
// 检查是否 Array 类型
export function isArray(item) {
  return isType(item, 'Array');
}

// check if Object type
// 检查是否 Object 类型
export function isObject(item) {
  return isType(item, 'Object');
}

// turn into Array type
// 转化为 Array 类型
export function toArray(item) {
  return Array.prototype.slice.call(item);
}

// check if truthy
// 检查是否 truthy 值
export function isTruthy(item) {
  return !!item;
}

// set attribute
// 设置属性
export function setAttr(node, key, value) {
  let tagName;
  switch (key) {
    case 'style':
      node.style.cssText = value;
      break;
    case 'value':
      tagName = (node.tagName || '').toLowerCase();
      if (tagName === 'input' || tagName === 'textarea') {
        node.value = value;
      } else {
        // if not input and textarea, use setAttribute
        node.setAttribute(key, value);
      }
      break;
    default:
      node.setAttribute(key, value);
      break;
  }
}
