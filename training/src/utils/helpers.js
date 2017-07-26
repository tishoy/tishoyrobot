// @flow
import config from "../config.js";
import { DATA_TYPE_ALL } from "../enum.js";

export function kebabCase(string: String) {
  return string
    .split(/ |_|-/)
    .join('-')
    .split('')
    .map((a, index) => {
      if (a.toUpperCase() === a && a !== '-') {
        return (index !== 0 ? '-' : '') + a.toLowerCase();
      }
      return a;
    })
    .join('')
    .toLowerCase();
}

export function titleize(string: String) {
  return string
    .split('-')
    .map(word => word.split(''))
    .map(letters => {
      const first = letters.shift();
      return [first.toUpperCase(), ...letters].join('');
    })
    .join(' ');
}

export function getTimeString(timeStamp) {
  let date;
  let ts = parseInt(timeStamp);
  if (isNaN(ts)) {
    data = new Date();
  } else if (ts > 1000000000000) {
    date = new Date(ts);
  } else {
    date = new Date(ts * 1000);
  }
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  return [year, month, day].map(Util.number.formatTimeNumber).join('/') + ' ' + [hour, minute, second].map(Util.number.formatTimeNumber).join(':')
}

export function getData(router, json, callback = null, args = {}) {
  if (isJson(json)) {

  }
  fetch(router, {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  }).then(function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    else {
      return Promise.reject(new Error(response.statusText));
    }
  }).then(function (response) {
    console.log("respond");
    return response.json();
  }).then(function (data) {
    if (callback !== null) {
      callback(router, data, args);
    }
    return data;
  }).catch(function (e) {
    console.log(e);
    console.log("调用" + router + "接口出错");
  });
  return
}

export function isJson(obj) {
  return typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}

export function getRouter(key) {
  var router = sessionStorage.getItem(key);
  return router === null ? config.routers : router;
}

export function getStorage(key) {
  return localStorage.getItem(key);
}

/**
 * 保存所有数据
 * - info 个人与公司信息
 *  - base
 *  - finance
 *  - express
 *  - admin
 * - students 所有学生
 * - clazz 所属班级
 */
export function getCache(key = DATA_TYPE_ALL) {
  if (key === DATA_TYPE_ALL) {
    return window.CacheData;
  }
  return window.CacheData[key];
}

export function getStudent(id = 0) {
  for (var i = 0; i < window.CacheData[STUDENT].length; i++) {
    if (window.CacheData[STUDENT].id === id) {
      return window.CacheData[STUDENT][i];
    }
  }
  return {};
}

export function notification() {
  var source = new EventSource(config.notification);
  source.onmessage = function (event) {
    console.log(event.data);

  };
}