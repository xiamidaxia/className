require('should');
var className = require('../index');

describe('className test', function() {
  it('empty', function() {
    var cls = className('pre');
    cls('').should.eql('pre');
    cls().should.eql('pre');
  });
  it('main class', function() {
    var cls = className('pre');
    cls('a b').should.eql('pre-a pre-b');
    cls('a b  ').should.eql('pre-a pre-b');
    cls('  a b').should.eql('pre-a pre-b');
    cls('a   b').should.eql('pre-a pre-b');
    cls({a: true, b: true, c: false}).should.eql('pre-a pre-b');
  });
  it('state class', function() {
    var cls = className('pre');
    cls(null, 'b c').should.eql('b c')
    cls(null, ' b    c  ').should.eql('b c')
    cls('a', ' b   c').should.eql('pre-a b c');
    cls('a b', ' b   c').should.eql('pre-a pre-b b c');
    cls('a', {b: true, c: false}).should.eql('pre-a b');
  });
});