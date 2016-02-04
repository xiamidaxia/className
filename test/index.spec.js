require('should');
var className = require('../index');

describe('className test', function() {
  it('empty', function() {
    var cls = className('pre');
    cls('').should.eql('pre');
    cls().should.eql('pre');
    ;('' + cls).should.eql('pre');
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
    cls(null, 'b c').should.eql('b c');
    cls(null, ' b    c  ').should.eql('b c');
    cls('a', ' b   c').should.eql('pre-a b c');
    cls('a b', ' b   c').should.eql('pre-a pre-b b c');
    cls('a', {b: true, c: false}).should.eql('pre-a b');
  });
  it('prefix add', function() {
    var cls = className('pre');
    var cls2 = cls.add('next');
    cls2('a').should.eql('pre-next-a');
    cls('a').should.eql('pre-a');
  });
  it('defaultPrefix', function() {
      var cls = className('pre');
      cls('a', '', true).should.eql('pre pre-a');
      cls('', '', true).should.eql('pre');
      cls('', 'a', true).should.eql('pre a');
  });
});