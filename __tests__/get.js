const get = require('../src/get').default;

const testObject = {
  name: 'Waseem',
  children: [{
    name: 'Joseph',
    nicknames: [{ name: 'Joe' }]
  }],
  location: {
    coords: { latitude: 39, longitude: -86 }
  },
  blocked: null,
}

describe("diggs.get()", () => {
  it('returns a value from an object', () => {
    expect(get(testObject, 'location.coords.latitude')).toEqual(39);
  });

  it('returns a value from an array', () => {
    expect(get(testObject, 'children[0].name')).toEqual('Joseph');
  });

  it('returns a value from nested objects and arrays', () => {
    expect(get(testObject, 'children[0].nicknames[0].name')).toEqual('Joe');
  });

  it('returns array items', () => {
    const array = [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
    ];

    expect(get(array, '[1].name')).toEqual(array[1].name);
    expect(get(array, '[1]')).toMatchObject(array[1]);
  });

  it('returns charachter from a string', () => {
    expect(get(testObject.name, '[2]')).toEqual('s');
  })

  it('returns undefined or a default value', () => {
    expect(get(testObject, 'blocked.foo')).toBeUndefined();
    expect(get(testObject, 'blocked.foo', true)).toEqual(true);
  })
})
