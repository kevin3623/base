var isEmpty = function (s) {
  if (!/\S/.test(s)) {
    return false;
  }
  return true;
}

var isPhoneNo = function (phoneNo) {
  if (!/^(13|14|15|16|17|18|19)\d{9}$/i.test(phoneNo)) {
    return false;
  }
  return true;
}

var isPassWord = function (passWord) {
  if (!/^(?!\d+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/i.test(passWord)) {
    return false;
  }
  return true;
}

var isVercode = function (vercode) {
  if (!/^\d{6}$/i.test(vercode)) {
    return false;
  }
  return true;
}

var isIdcard = function (cardNo) {
  var checkedValue = cardNo;
  checkedValue = checkedValue.replace(/\s+/g, "");
  if (checkedValue.length != 18) {
    return false;
  }
  var dateValue = checkedValue.substring(6, 14);
  if (!checkDate(dateValue)) {
    return false;
  }
  return checkPersonId(checkedValue);
}
function checkDate(sDate) {
  var checkedDate = sDate;
  var year, month, day;
  //日期为空 长度不等于8或14 返回错误
  var maxDay = new Array(0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  if (checkedDate.length != 8) {
    return false;
  }
  year = checkedDate.substring(0, 4);
  month = checkedDate.substring(4, 6);
  day = checkedDate.substring(6, 8);
  // 日期中1至4位 年小于1900 返回错误
  if (year < 1900) {
    return false;
  }
  // 日期中5至6位 月在1至12区间之外 返回错误
  if (month < 1 || month > 12) {
    return false;
  } else if (month < 10) month = month.substr(1, 1);
  // 日期中7至8位 日在1至maxDay[month]区间之外 返回错误
  if (day > maxDay[month] || day == 0) {
    return false;
  }
  // 非闰年2月份日期大于29
  if (day == 29 && month == 2 && (year % 4 != 0 || year % 100 == 0) && (year % 4 != 0 || year % 400 != 0)) {
    return false;
  }
  return true;
}
function checkPersonId(personId) {
  var strJiaoYan = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
  var intQuan = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
  var intTemp = 0;
  for (var i = 0; i < personId.length - 1; i++) {
    intTemp += personId.substring(i, i + 1) * intQuan[i];
  }
  intTemp %= 11;
  return personId.substring(personId.length - 1) == strJiaoYan[intTemp];
}

module.exports = {
  isEmpty: isEmpty,
  isPhoneNo: isPhoneNo,
  isPassWord: isPassWord,
  isVercode: isVercode,
  isIdcard: isIdcard
}