var classNames = require('classnames');
/**
 * @param {string} prefix
 * @returns {function}
 * @example
 *    let cls = className('pre');
 *    cls('a b') // pre-a pre-b;
 *    cls({a: true, b: true}) // pre-a pre-b;
 *    cls('a', 'b c') // pre-a b c;
 *    cls('a', {b: true, c: false}) // pre-a b;
 *    cls = cls.add('next');
 *    cls('a') // pre-next-a
 */
module.exports = function className(prefix) {
  function cls(mainClass, stateClass, defaultPrefix) {
    mainClass = mainClass || '';
    if (typeof stateClass === 'boolean') {
      defaultPrefix = stateClass;
      stateClass = '';
    } else {
      stateClass = stateClass || '';
    }
    mainClass = typeof mainClass !== 'string' ? classNames(mainClass) : mainClass.trim();
    stateClass = typeof stateClass !== 'string' ? classNames(stateClass) : stateClass.split(' ').filter(emptyFilter).join(' ').trim();
    var result = mainClass.split(' ').filter(emptyFilter)
        .map(function(c) {return prefix + '-' + c}).join(' ') + ' ' + stateClass;
    result = result.trim() || prefix;
    return (defaultPrefix && result !== prefix ) ? prefix + ' ' + result : result;
  }
  cls.add = function (name) {
    return className(prefix + '-' + name);
  };
  cls.prefix = cls.toString = function () {
    return prefix;
  };
  return cls;
}

function emptyFilter(c) {
  return !!c;
}
