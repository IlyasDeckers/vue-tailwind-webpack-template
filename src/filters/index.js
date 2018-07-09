/* eslint-disable */

import momentjs from 'moment';

export function json(value) {
  return typeof value === 'string'
    ? value
    : JSON.stringify(value, null, arguments.length > 1 ? 2 : 2);
}

export function lowercase(value) {
  return value || value === 0 ? value.toString().toLowerCase() : '';
}

export function uppercase(value) {
  return value || value === 0 ? value.toString().toUpperCase() : '';
}

export function hide(value, pattern) {
  return value || value === 0 ? value.toString().replace(pattern, '') : '';
}

export function boolean(value, truthy, falsy) {
  return value || value === true ? truthy : falsy;
}

export function initials(value) {
  let initials = '';
  let parts = value.split(/[ -]/);
  for (var i = 0; i < parts.length; i++) {
    initials += parts[i].charAt(0);
  }
  if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
    initials = initials.replace(/[a-z]+/g, '');
  }
  initials = initials.substr(0, 3).toUpperCase();
  return initials;
}

export function standardBase(value, type) {
  if (type === 'supplier') {
    if (value === 0) {
      return 'Normale heffing';
    } else if (value === 3) {
      return 'IC goederen';
    } else if (value === 7) {
      return 'IC diensten';
    }
  } else if (type === 'customer') {
    if (value === 0) {
      return '0%';
    } else if (value === 1) {
      return '6%';
    } else if (value === 2) {
      return '12%';
    } else if (value === 3) {
      return '21%';
    } else if (value === 4) {
      return '0%';
    } else if (value === 5) {
      return '0%';
    } else if (value === 10) {
      return 'IC diensten';
    } else if (value === 14) {
      return 'Niet onderworpen';
    }
  }
  return value;
}

export function vatSystem(value) {
  if (value === 0) {
    return 'Binnenland normaal';
  } else if (value === 3) {
    return 'Binnenland vrijgesteld';
  } else if (value === 4) {
    return 'EU';
  } else if (value === 5) {
    return 'EU + BTW';
  } else if (value === 6) {
    return 'Buiten EU';
  } else if (value === 7) {
    return 'Buiten EU + BTW';
  }
  return value;
}

export function titlecase(value) {
  return value
    .split('_')
    .map(function(item) {
      return item.charAt(0).toUpperCase() + item.substring(1);
    })
    .join(' ');
}

export function truncate(text, length, clamp) {
  clamp = clamp || '...';
  let node = document.createElement('div');
  node.innerHTML = text;
  let content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
}

export function time(value) {
  let hrs = parseInt(value);
  let min = Math.round((Number(value) - hrs) * 60);
  if (min === 60) {
    hrs++;
    min = 0;
  }

  hrs = padLeft(hrs, 2, '0');
  min = padLeft(min, 2, '0');
  return hrs + ':' + min;
}

export function percentage(value, total) {
  return (value / total * 100).toFixed(0);
}

export function padLeft(val, length, token = ' ') {
  return `${token.repeat(Math.max(length - String(val).length, 0))}${val}`;
}

export function padRight(val, length, token = ' ') {
  return `${val}${token.repeat(Math.max(length - String(val).length, 0))}`;
}

export function currency(value, decimals) {
  return Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
    minimumFractionDigits: decimals,
    maximumFractionDigit: decimals,
  }).format(value);
}

export function number(value, decimals) {
  return Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

export function moment(value, format) {
  format = format || 'MMMM YYYY';
  return value ? momentjs(value).format(format) : '';
}
export function moment_from(value, format) {
  return value ? momentjs(value).fromNow() : '';
}
