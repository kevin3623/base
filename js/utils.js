/**
 * 格式化时间
 * @param {String} formater 日期格式
 * @param {字符串} t 创建时间
 */
function dateFormater(formater, t) {
  let date = t ? new Date(t) : new Date(),
      Y = date.getFullYear() + '',
      M = date.getMonth() + 1,
      D = date.getDate(),
      H = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();
  return formater.replace(/YYYY|yyyy/g, Y)
      .replace(/YY|yy/g, Y.substr(2,2))
      .replace(/MM/g, (M<10?'0':'') + M)
      .replace(/DD/g, (D<10?'0':'') + D)
      .replace(/HH|hh/g,(H<10?'0':'') + H)
      .replace(/mm/g,(m<10?'0':'') + m)
      .replace(/ss/g,(s<10?'0':'') + s)
}
/**
 * 节流函数 限制函数在指定时间段只能被调用一次
 * 用法 比如防止用户连续执行一个耗时操作 对操作按钮点击函数进行节流处理
 * @param {Function} func [需要节流的函数]
 * @param {Number} wait [节流控制时间]
 */
function throttle(func, wait) {
    let timer = null;
    return function(...args) {
      if (!timer) {
        func(...args);
        timer = setTimeout(() => {
          timer = null;
        }, wait);
      }
    }
  }