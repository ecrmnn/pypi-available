# pypi-available
> Check if a package name is available on PyPI

[![Travis](https://img.shields.io/travis/ecrmnn/pypi-available.svg?style=flat-square)](https://travis-ci.org/ecrmnn/pypi-available.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/pypi-available.svg?style=flat-square)](http://badge.fury.io/js/pypi-available)
[![npm downloads](https://img.shields.io/npm/dm/pypi-available.svg?style=flat-square)](http://badge.fury.io/js/pypi-available)
[![npm license](https://img.shields.io/npm/l/pypi-available.svg?style=flat-square)](http://badge.fury.io/js/pypi-available)

### Installation
```bash
npm install pypi-available --save
```

### Usage
```javascript
const pypi = require('pypi-available');

pypi('virtualenv')
  .then(available => {
    console.log(available);
    //=> false
  });

pypi('some_random_package_name')
  .then(available => {
    console.log(available);
    //=> true
  });
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)