/**
 * 规范化 sessionStorage 接口
 * key, value 只允许为 String
 * keys 只允许为 Array
 * obj 只允许为 Object，且属性类型为 String
 *     以后补充属性类型 Symbol
 *
 * @class SessionStorage
 */
class SessionStorage {
  constructor() {
    if (!window.sessionStorage) {
      throw new Error('utils.StorageMsg.notSupportSessionStorage');
    }
  }

  /**
   * 获取 sessionStorage 已存储的 key-value 对数量
   * @static
   * @returns { Number }
   * @memberof SessionStorage
   */
  static getLength() {
    if (arguments.length !== 0) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    return window.sessionStorage.length;
  }

  /**
   * 返回 sessionStorage 中 key 对应的 value
   * 也可能是 null
   * @static
   * @param { String } key
   * @returns { [ null, String ]}
   * @memberof SessionStorage
   */
  static getItem(key) {
    if (arguments.length !== 1) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    if (Object.prototype.toString.call(key).slice(8, -1) !== 'String') {
      throw new Error('utils.StorageMsg.notSupportKeyType');
    }
    return window.sessionStorage.getItem(key);
  }

  /**
   * 返回 sessionStorage 中 keys 对应的 values
   * 返回值是一个 key-value 形式的对象
   * 也可能是空对象
   * @static
   * @param { Array<String> } keys
   * @returns { Object }
   * @memberof SessionStorage
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
   * @memberof SessionStorage
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
    window.sessionStorage.setItem(key, val);
  }

  /**
   * 设置 key-value 形式的对象 obj
   * 对应 key 的 value
   * @static
   * @param { Object } obj
   * @memberof SessionStorage
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
   * @memberof SessionStorage
   */
  static removeItem(key) {
    if (arguments.length !== 1) {
      throw new Error('utils.StorageMsg.notExactParams');
    }
    if (Object.prototype.toString.call(key).slice(8, -1) !== 'String') {
      throw new Error('utils.StorageMsg.notSupportKeyType');
    }
    window.sessionStorage.removeItem(key);
  }

  /**
   * 移除 sessionStorage 中 keys 对应的 values
   * @param { Array<String> } keys
   * @memberof SessionStorage
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
   * 清空 sessionStorage
   * @memberof SessionStorage
   */
  static clear() {
    window.sessionStorage.clear();
  }
}

export default SessionStorage;
