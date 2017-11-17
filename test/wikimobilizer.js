var should = require('should');
var Wikimobilizer = require('../src/wikimobilizer.js');

describe('Wikimobilizer', function() {

  describe('#transformUrl', function() {

    it('leaves non-Wikipedia URLs alone', function () {
      Wikimobilizer.transformUrl('https://poop.bike')
        .should.equal('https://poop.bike');
    });

    it('rewrites Liverpool to the mobile Wikipedia site', function () {
      Wikimobilizer.transformUrl('https://en.wikipedia.org/wiki/Liverpool').
        should.equal('https://en.m.wikipedia.org/wiki/Liverpool');
    });

    it('rewrites a more complex URL to the mobile Wikipedia site', function () {
      Wikimobilizer.transformUrl('https://en.wikipedia.org/wiki/Category:United_States_military_reconnaissance_aircraft_1950–1959').
        should.equal('https://en.m.wikipedia.org/wiki/Category:United_States_military_reconnaissance_aircraft_1950–1959');
    });

    it('rewrites the German Wikipedia article about Ireland to the mobile Wikipedia site', function () {
      Wikimobilizer.transformUrl('https://de.wikipedia.org/wiki/Irland').
        should.equal('https://de.m.wikipedia.org/wiki/Irland');
    });

    it('rewrites non-secure URLs to their secure mobile variant', function () {
      Wikimobilizer.transformUrl('http://de.wikipedia.org/wiki/Irland').
        should.equal('https://de.m.wikipedia.org/wiki/Irland');
    });

  });

  describe("#redirect", function() {
    it('does only issue a redirect if the requested URL requires one', function () {
      Wikimobilizer.redirect({url: "https://de.m.wikipedia.org/wiki/Irland"}).
        should.be.an.Object.and.be.empty;
    });
  });

});

