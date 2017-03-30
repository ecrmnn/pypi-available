'use strict';

const axios = require('axios');

module.exports = function (name) {
  if (!(typeof name === 'string' && name.length !== 0)) {
    return Promise.reject(new Error('Package name required'));
  }

  return new Promise(function (resolve) {
    axios
      .get('https://pypi.python.org/pypi/' + name.toLowerCase())
      .then(function (response) {
        if (response.status === 200) {
          resolve(false);
        }
        resolve(true);
      })
      .catch(function () {
        resolve(true);
      });
  });
};