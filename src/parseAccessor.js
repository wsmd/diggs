/**
 * Parse an accessor into object name and its property
 * Example:
 *  'foo['bar']' => objectName: foo, property: bar
 *
 * @param  {string} accessor an accessor string
 * @return {object}          objectName and property
 */
function parseAccessor(accessor) {
  const ACCESSOR_REGEX = /([\w$]+)(\[['`\"]?(.*?)['`\"]?\])?/;

  const matches = accessor.match(ACCESSOR_REGEX);
  return {
    objectName: matches[1],
    property: matches[3],
  }
}

export default parseAccessor;
