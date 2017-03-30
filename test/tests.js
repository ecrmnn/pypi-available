'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const pypi = require('../src/');

describe('PyPI Name Test Suite', function () {

  describe('lksfsahfis_sdfkshdfiush should be available', function () {
    let result;

    before(function (done) {
      pypi('lksfsahfis_sdfkshdfiush')
        .then(() => {
          result = true;
          done();
        })
        .catch(() => {
          result = false;
          done();
        });
    });

    it('lksfsahfis_sdfkshdfiush should be available', function () {
      expect(result).to.eql(true);
    });
  });

  describe('empty name throws an error', function () {
    let available;

    before(function (done) {
      pypi()
        .then(response => {
          available = response;
          done();
        })
        .catch(function (err) {
          available = err;
          done();
        });
    });

    it('empty name throws an error', function () {
      expect(available instanceof Error).to.be.eql(true);
    });
  });

  describe('blank name throws an error', function () {
    let available;

    before(function (done) {
      pypi('')
        .then(response => {
          available = response;
          done();
        })
        .catch(function (err) {
          available = err;
          done();
        });
    });

    it('blank name throws an error', function () {
      expect(available instanceof Error).to.be.eql(true);
    });
  });

  describe('returns false when unavailable', function () {
    let available;

    before(function (done) {
      pypi('virtualenv')
        .then(response => {
          available = response;
          done();
        })
        .catch(function (err) {
          available = err;
          done();
        });
    });

    it('returns false when unavailable', function () {
      expect(available).to.be.eql(false);
    });
  });

});