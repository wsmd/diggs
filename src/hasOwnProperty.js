/**
 * Checks if object has own property
 * @param  {object}  object an object whose
 * @return {Boolean}        a boolean indicating whether object has specified property
 */
function hasOwnProperty(object) {
  return key =>
    object && Object.prototype.hasOwnProperty.call(object, key);
}

export default hasOwnProperty;
