[![Build Status](https://travis-ci.org/wsmd/diggs.svg?branch=master)](https://travis-ci.org/wsmd/diggs)

<img src="https://cloud.githubusercontent.com/assets/2100222/22677661/6f18c278-ecc2-11e6-8f71-d201c4265d27.png" width="233">

A lightweight utility to safely dig into nested properties – because safety is number one priority.

## Installation

To install `diggs`:

```
npm install --save diggs
```

That's it!

## Why `diggs`?

diggs allows you to access deeply nested properties  without having to worry about undefined properties, null, or TypeErrors.

```javascript
// Uncaught TypeError: Cannot read property 'foo' of null
// Uncaught TypeError: Cannot read property 'foo' of undefined
```

## Examples

```javascript
import { get } from 'diggs';

let data = {
  a: {
    b: {
      c: ['foo', { d: 'bar' }],
    }
  },
  z: null,
}

// retrieve deeply nested properties
get(data, 'a.b.c')      // => ['foo', { d: 'bar' }]

// even array items
get(data, 'a.b.c[1].d') // => 'bar'

// returns undefined instead of throwing TypeErrors
get(data, 'z.a')        // => undefined

// returns a default value
get(data, 'z.a', false) // => false
```

## API

### `get(object, path, [defaultValue])`

Returns the value at the specified `path` of `object`. If the value is not found (`undefined`), defaultValue will be returned instead.

#### Arguments

* `object` *(Object)*: The object to query
* `path` *(String)*: The path of the property to get
* [`defaultValue`] *(Any)*: The value returned for `undefined` values

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request
6. ...
7. Profit

## License

MIT

![](http://forthebadge.com/images/badges/gluten-free.svg)
