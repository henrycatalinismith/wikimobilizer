var should = require('should');
var wikimobilizer = require('../src/wikimobilizer.js');

describe('wikimobilizer', function() {

  it('leaves non-Wikipedia URLs alone', function () {
    wikimobilizer('https://poop.bike')
      .should.equal('https://poop.bike');
  });

  it('rewrites to the mobile Wikipedia site', function () {
    wikimobilizer('http://en.wikipedia.org/wiki/Liverpool').
      should.equal('http://en.m.wikipedia.org/wiki/Liverpool');
  });

});

