/* eslint-disable */
import merge from './merge';

export { default as merge } from './merge';

export function replace(array, item) {
  const id = array.findIndex(x => x.id === item.id);
  const data = array[id];
  return array.splice(id, 1, merge(data, item));
}

if (!Array.prototype.update) {
  Object.defineProperty(Array.prototype, 'update', {
    enumerable: false,
    value: function (item) {
      const id = this.findIndex(x => x.id === item.id);
      return this.splice(id, 1, merge(this[id], item));
    },
  });
}

export function remove(array, item) {
  const id = array.findIndex(x => x.id === item.id);
  return array.splice(id, 1);
}

if (!Array.prototype.remove) {
  Object.defineProperty(Array.prototype, 'remove', {
    enumerable: false,
    value: function (item) {
      const id = this.findIndex(x => x.id === item.id);
      return this.splice(id, 1);
    },
  });
}

export function compare(x, y, reverse = false) {
  let comparison = 0;

  if (x > y) {
    comparison = 1;
  } else if (x < y) {
    comparison = -1;
  }
  return reverse ? comparison * -1 : comparison;
}

export function array_get(obj, str) {
  return str.split('.').reduce((o, x) => o[x], obj);
}

export function orderBy(key, reverse = false) {
  return function (a, b) {
    let x = array_get(a, key);
    let y = array_get(b, key);

    if (x === y) {
      return 0;
    } else if (x === null) {
      return 1;
    } else if (y === null) {
      return -1;
    }

    x = typeof x === 'string' ? x.toUpperCase() : x;
    y = typeof y === 'string' ? y.toUpperCase() : y;
    return compare(x, y, reverse);
  };
}

if (!Array.prototype.orderBy) {
  Object.defineProperty(Array.prototype, 'orderBy', {
    enumerable: false,
    value: function (cmp) {
      cmp = cmp ? cmp : (a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      };
      let stabilizedThis = this.map((el, index) => [el, index]);
      let stableCmp = (a, b) => {
        let order = cmp(a[0], b[0]);
        if (order != 0) return order;
        return a[1] - b[1];
      };
      stabilizedThis.sort(stableCmp);
      for (let i = 0; i < this.length; i++) {
        this[i] = stabilizedThis[i][0];
      }
      return this;
    },
  });
}

export function flatten(list) {
  return Array.prototype.concat(...list);
}

export function groupBy(array, key) {
  if (!Array.isArray(array)) return [];
  let result = {};
  if(array.length === 1) {
    let resolved = String(array_get(array[0], key));
    result[resolved] = [];
    result[resolved].push(array[0]);
  } else {
    array.forEach(item => {
      let resolved = String(array_get(item, key));
      if (result[resolved] === undefined) {
        result[resolved] = [];
      }
      result[resolved].push(item);
    });
  }

  return result;
}

export function filter(array, filters) {
  let collection = [].concat(array);
  if (!isEmpty(filters)) {
    collection = collection.filter(obj => {
      return Object.keys(filters).every(propertyName => {
        if (filters[propertyName].length === 0) {
          return true;
        } else if (
          isArray(filters[propertyName])
        ) {
          return filters[propertyName].includes(obj[propertyName]);
        } else if (
          isString(filters[propertyName])
        ) {
          return obj[propertyName].toLowerCase().includes(filters[propertyName.toLowerCase()]);
        } else if (isFunction(filter[propertyName])) {
          return filters[propertyName](obj[propertyName]);
        } else {
          return filters[propertyName] === obj[propertyName];
        }
      });
    });
  }

  return collection;
}

export function search(haystack, needle) {
  if (isArray(haystack)) {
    return haystack.filter(x => search(x, needle));
  } else if (isObject(haystack)) {
    return Object.keys(haystack).some(key => {
      if (isObject(haystack[key])) {
        return search(haystack[key], needle);
      }

      return String(haystack[key])
        .toLowerCase()
        .includes(String(needle).toLowerCase());
    });
  }
  return [];
}

export function isString(val) {
  return typeof val === 'string' || val instanceof String;
}

export function isObject(val) {
  return (
    typeof val === 'object' &&
    exists(val) &&
    !isArray(val) &&
    !(val instanceof RegExp) &&
    !(val instanceof String) &&
    !(val instanceof Number)
  );
}

export function isFunction(functionToCheck) {
  let getType = {};
  return (
    functionToCheck &&
    getType.toString.call(functionToCheck) === '[object Function]'
  );
}

export function isArray(val) {
  return Array.isArray(val);
}

export function isInteger(val) {
  if (isNaN(val)) {
    return false;
  }
  let x = parseFloat(val);
  return (x | 0) === x;
}

export function isFloat(n) {
  return n === +n && n !== (n | 0);
}

export function isEmpty(val) {
  if (isString(val) || isArray(val)) {
    return val.length === 0;
  } else if (isObject(val)) {
    for (const name in val) {
      if (val.hasOwnProperty(name)) {
        return false;
      }
    }
    return true;
  }
  throw new TypeError('Val must be a string, array or object');
}

export function exists(val) {
  return val !== undefined && val !== null;
}

export function sum(array, key) {
  return array.map(x => x[key]).reduce((x, y) => x + y, 0);
}
