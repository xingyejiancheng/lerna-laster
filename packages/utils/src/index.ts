/**
 * 判断是否数组
 *
 * @name isArray
 * @function
 * @param {any} o 判断对象
 * @return {boolean} 是否数组
 */
 export default function isArray(o: any) {
    return (
      (o || false) &&
      (o.constructor === Array || Object.prototype.toString.call(o) === '[object Array]')
    );
  }