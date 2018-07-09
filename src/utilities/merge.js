/* eslint-disable */

function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
  var clone = !optionsArgument || optionsArgument.clone !== false;

  return (clone && isMergeableObject(value))
    ? merge(emptyTarget(value), value, optionsArgument)
    : value;
}

function defaultArrayMerge(target, source, optionsArgument) {
  let result = [];
  source.forEach(function (item) {
    if (isMergeableObject(item)) {
      const id = target.findIndex(x => x.id === item.id);
      if (id !== -1) {
        result.push(merge(target[id], item, optionsArgument));
      } else {
        result.push(cloneUnlessOtherwiseSpecified(item, optionsArgument));
      }
    } else {
      result.push(cloneUnlessOtherwiseSpecified(item, optionsArgument));
    }
  });
  return result;
}

function mergeObject(target, source, optionsArgument) {
  var destination = {};
  if (isMergeableObject(target)) {
    Object.keys(target).forEach(function (key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
    });
  }
  Object.keys(source).forEach(function (key) {
    if (!isMergeableObject(source[key]) || !target[key]) {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
    } else {
      destination[key] = merge(target[key], source[key], optionsArgument);
    }
  });
  return destination;
}

function isMergeableObject(value) {
  return isNonNullObject(value)
    && !isSpecial(value);
}

function isNonNullObject(value) {
  return !!value && typeof value === 'object';
}

function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);

  return stringValue === '[object RegExp]'
    || stringValue === '[object Date]';
}

export default function merge(target, source, optionsArgument) {
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var options = optionsArgument || { arrayMerge: defaultArrayMerge };
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, optionsArgument);
  } else if (sourceIsArray) {
    var arrayMerge = options.arrayMerge || defaultArrayMerge;
    return arrayMerge(target, source, optionsArgument);
  } else {
    return mergeObject(target, source, optionsArgument);
  }
}
