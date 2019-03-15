/**
 * 规范化 localStorage 接口
 * key, value 只允许为 String
 * keys 只允许为 Array
 * obj 只允许为 Object，且属性类型为 String
 *     以后补充属性类型 Symbol
 *
 * 建议在 localStorage 中
 * 存储 token 和 JSON 序列化的 user 信息
 * @class LocalStorage
 */
class LocalStorage {
  constructor() {
    if (!window.localStorage) {
      throw new Error('utils.StorageMsg.notSupportLocalStorage');
    }
  }

  /**
   * 获取 localStorage 已存储的 key-value 对数量
   * @static
   * @returns { Number }
   * @memberof LocalStorage
   */
  static getLength() {
    if (arguments.length !== 0) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    return window.localStorage.length;
  }

  /**
   * 返回 localStorage 中 key 对应的 value
   * 也可能是 null
   * @static
   * @param { String } key
   * @returns { [ null, String ]}
   * @memberof LocalStorage
   */
  static getItem(key) {
    if (arguments.length !== 1) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    if (Object.prototype.toString.call(key).slice(8, -1) !== 'String') {
      throw new Error('utils.StorageMsg.notSupportKeyType');
    }
    return window.localStorage.getItem(key);
  }

  /**
   * 返回 localStorage 中 keys 对应的 values
   * 返回值是一个 key-value 形式的对象
   * 也可能是空对象
   * @static
   * @param { Array<String> } keys
   * @returns { Object }
   * @memberof LocalStorage
   */
  static getItems(keys) {
    if (arguments.length !== 1) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    if (Object.prototype.toString.call(keys).slice(8, -1) !== 'Array') {
      throw new Error('utils.StorageMsg.notSupportKeysType');
    }
    const res = {};
    keys.forEach((key) => {
      const val = this.getItem(key);
      if (val) {
        res[key] = val;
      } else {
        throw new Error('utils.StorageMsg.keyNotExists');
      }
    });
    return res;
  }

  /**
   * 设置对应 key 的 value
   * @static
   * @param { String } key
   * @param { String } val
   * @memberof LocalStorage
   */
  static setItem(key, val) {
    if (arguments.length !== 2) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    if (Object.prototype.toString.call(key).slice(8, -1) !== 'String') {
      throw new Error('utils.StorageMsg.notSupportKeyType');
    }
    if (Object.prototype.toString.call(val).slice(8, -1) !== 'String') {
      throw new Error('utils.StorageMsg.notSupportValueType');
    }
    window.localStorage.setItem(key, val);
  }

  /**
   * 设置 key-value 形式的对象 obj
   * 对应 key 的 value
   * @static
   * @param { Object } obj
   * @memberof LocalStorage
   */
  static setItems(obj) {
    if (arguments.length !== 1) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    if (Object.prototype.toString.call(obj).slice(8, -1) !== 'Object') {
      throw new Error('utils.StorageMsg.notSupportParamType');
    }
    Object.keys(obj).forEach((key) => {
      this.setItem(key, obj[key]);
    });
  }

  /**
   * 移除对应 key 的 value
   * @static
   * @param { String } key
   * @memberof LocalStorage
   */
  static removeItem(key) {
    if (arguments.length !== 1) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    if (Object.prototype.toString.call(key).slice(8, -1) !== 'String') {
      throw new Error('utils.StorageMsg.notSupportKeyType');
    }
    window.localStorage.removeItem(key);
  }

  /**
   * 移除 localStorage 中 keys 对应的 values
   * @param { Array<String> } keys
   * @memberof LocalStorage
   */
  removeItems(keys) {
    if (arguments.length !== 1) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    if (Object.prototype.toString.call(keys).slice(8, -1) !== 'Array') {
      throw new Error('utils.StorageMsg.notSupportKeysType');
    }
    keys.forEach((key) => {
      this.removeItem(key);
    });
  }

  /**
   * 清空 localStorage
   * @memberof LocalStorage
   */
  static clear() {
    window.localStorage.clear();
  }
}

export default LocalStorage;
