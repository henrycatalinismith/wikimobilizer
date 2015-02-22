var should = require('should');
var Wikimobilizer = require('../src/wikimobilizer.js');

describe('Wikimobilizer', function() {

  describe('#transformUrl', function() {

    it('leaves non-Wikipedia URLs alone', function () {
      Wikimobilizer.transformUrl('https://poop.bike')
        .should.equal('https://poop.bike');
    });

    it('rewrites Liverpool to the mobile Wikipedia site', function () {
      Wikimobilizer.transformUrl('http://en.wikipedia.org/wiki/Liverpool').
        should.equal('http://en.m.wikipedia.org/wiki/Liverpool');
    });

    it('rewrites a more complex URL to the mobile Wikipedia site', function () {
      Wikimobilizer.transformUrl('http://en.wikipedia.org/wiki/Category:United_States_military_reconnaissance_aircraft_1950–1959').
        should.equal('http://en.m.wikipedia.org/wiki/Category:United_States_military_reconnaissance_aircraft_1950–1959');
    });

  });

});

