const parseAccessor = require('../src/parseAccessor').default;

describe("parseAccessor()",  () => {

  it('parses array accessors', () => {
    const accessors = [
      'array[0]',
      'array[\'0\']',
    ]
    const expected = { objectName: 'array', property: '0' };

    accessors.forEach(accessor => {
      expect(parseAccessor(accessor)).toMatchObject(expected);
    })
  });

  it('parses object accessors', () => {
    const accessors = [
      'object[property]',
      'object["property"]',
      'object[\"property\"]',
      'object[\'property\']',
      'object[`property`]',
    ];
    const expected = { objectName: 'object', property: 'property' };

    accessors.forEach(accessor => {
      expect(parseAccessor(accessor)).toMatchObject(expected);
    })
  });

  it('parses objects without propery name', () => {
    const expected = { objectName: 'object', property: undefined };
    expect(parseAccessor('object')).toMatchObject(expected);
  });

})
