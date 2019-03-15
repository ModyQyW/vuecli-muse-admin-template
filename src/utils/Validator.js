/**
 * 提供一部分校验用函数，请视需求使用
 */

/**
 * 获取参数类型
 * 不传入参数返回 Undefined
 * 传入 NaN 返回 NaN
 * 传入多个参数只返回第一个参数的类型
 * @param { * } param
 * @returns { String }
 */
export function getType(param) {
  const type = Object.prototype.toString.call(param).slice(8, -1);
  switch (type) {
    case 'Number': return Number.isNaN(param) ? 'NaN' : type;
    default: return type;
  }
}

/**
 * 根据正则判断字符串是否符合要求
 * 符合要求返回 true，否则返回 false
 * @param { RegExp } reg
 * @param { String } param
 * @returns { Boolean }
 */
export function regTest(reg, str) {
  if (getType(reg) !== 'RegExp' || getType(str) !== 'String') {
    throw new Error('utils.ValidatorMsg.typeError');
  }
  if (arguments.length !== 2) {
    throw new Error('utils.ValidatorMsg.notExactParams');
  }
  return reg.test(str);
}
