const hasOwnProperty = require('../src/hasOwnProperty').default;

describe('hasOwnProperty()', () => {
  it('checks if hasOwnProperty on objects', () => {
    const object = { foo: 'foo' }
    const objectHasOwnProperty = hasOwnProperty(object);

    expect(objectHasOwnProperty('foo')).toBeTruthy();
    expect(objectHasOwnProperty('bar')).toBeFalsy();
    expect(objectHasOwnProperty('toString')).toBeFalsy();

    object.toString = () => {};
    expect(objectHasOwnProperty('toString')).toBeTruthy();
  });

  it('checks if hasOwnProperty on arrays', () => {
    const array = ['foo', 'bar', 'baz'];
    const arrayHasOwnProperty = hasOwnProperty(array);

    expect(arrayHasOwnProperty(0)).toBeTruthy();
    expect(arrayHasOwnProperty('10')).toBeFalsy();
    expect(arrayHasOwnProperty('toString')).toBeFalsy();
  });
})
