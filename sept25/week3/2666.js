/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let wasCalledBefore = false;
  return function (...args) {
    //for first time wasCalledBefore variable was closed with false so it was executed
    //then becomes true, so execution stopped
    if (!wasCalledBefore) {
      wasCalledBefore = true;
      return fn(...args);
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */