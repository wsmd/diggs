import parseAccessor from './parseAccessor';
import hasOwnProperty from './hasOwnProperty';

function get(object, path, defaultValue) {
  return path.split('.').reduce((value, accessor) => {
    const { objectName, property } = parseAccessor(accessor);
    const valueHasProperty = hasOwnProperty(value);

    if (!valueHasProperty(objectName)) {
      return defaultValue
    };

    if (property) {
      return value[objectName][property];
    };

    return value[objectName];
  }, object);
}

export default get;
