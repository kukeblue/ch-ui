// @type Function | @dec 去掉json里的空属性
const deleteObjectEmptyKey = (data: any) => {
  Object.keys(data).forEach(key => {
    if (data[key] === undefined || data[key] === null || data[key] === '') {
      delete data[key];
    }
  });
};

const phoneNumberHideMiddle = (no: number | string) => {
  const phoneNumber = no + '';
  if (phoneNumber.length < 11) {
    console.warn('chutil: error phone number');
    return no;
  }
  return phoneNumber.substr(0, 3) + '****' + phoneNumber.substr(7);
};

const emailHideMiddle = (email: string) => {
  return email.replace(/(.{2}).{4}(.{1,2})/, '$1****$2');
};

function formatDate(time: number, format = 'YY-MM-DD hh:mm:ss') {
  const date = new Date(time);
  const year = date.getFullYear(),
    month = date.getMonth() + 1, //月份是从0开始的
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();
  const preArr = Array.apply(null, Array(10)).map(function(elem, index) {
    return '0' + index;
  });

  const newTime = format
    .replace(/YY/g, year + '')
    .replace(/MM/g, preArr[month] || month + '')
    .replace(/DD/g, preArr[day] || day + '')
    .replace(/hh/g, preArr[hour] || hour + '')
    .replace(/mm/g, preArr[min] || min + '')
    .replace(/ss/g, preArr[sec] || sec + '');

  return newTime;
}

export default {
  deleteObjectEmptyKey,
  phoneNumberHideMiddle,
  emailHideMiddle,
  formatDate,
};
