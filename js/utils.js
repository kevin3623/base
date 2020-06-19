/**
 * 格式化时间
 * @param {String} formater 日期格式
 * @param {字符串} t 创建时间
 */
export function dateFormater(formater, t) {
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
export function throttle(func, wait) {
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

/* 下载 */
export function download (url, name) {
  const a = document.createElement('a')
  a.download = name
  a.rel = 'noopener'
  a.href = url
  // 触发模拟点击
  a.dispatchEvent(new MouseEvent('click'))
  // 或者 a.click(
}

/* 对url的各种操作 start     参考：https://q.cnblogs.com/q/21487/        
   需求说明：
        1、提取url上的参数
        2、删除url上的某个参数
        3、给url添加上某个参数

*/
// 删除某个参数
export function delQueStr(url, ref) //删除参数值
{
    var str = "";

    if (url.indexOf('?') != -1)
        str = url.substr(url.indexOf('?') + 1);
    else
        return url;
    var arr = "";
    var returnurl = "";
    var setparam = "";
    if (str.indexOf('&') != -1) {
        arr = str.split('&');
        for (i in arr) {
            if (arr[i].split('=')[0] != ref) {
                returnurl = returnurl + arr[i].split('=')[0] + "=" + arr[i].split('=')[1] + "&";
            }
        }
        return url.substr(0, url.indexOf('?')) + "?" + returnurl.substr(0, returnurl.length - 1);
    }
    else {
        arr = str.split('=');
        if (arr[0] == ref)
            return url.substr(0, url.indexOf('?'));
        else
            return url;
    }
}
// js 为url字符串添加、修改参数。       参考： https://www.cnblogs.com/xiaoruilin/p/11301802.html
export function editUrlParam(url, paramName, replaceWith) {
    if (url.indexOf(paramName) > -1) {
        var re = eval('/(' + paramName + '=)([^&]*)/gi');
        url = url.replace(re, paramName + '=' + replaceWith);
    } else {
        var paraStr = paramName + '=' + replaceWith;

        var idx = url.indexOf('?');
        if (idx < 0)
            url += '?';
        else if (idx >= 0 && idx != url.length - 1)
            url += '&';
        url=url + paraStr;
    }
    return url;
};
/* 对url字符串的操作 end */
