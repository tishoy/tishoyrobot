// @flow

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
