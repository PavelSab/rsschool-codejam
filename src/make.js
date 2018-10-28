module.exports = function make(...arg) {
  let Args = arg;
  const maked = function func(...args) {
    if (typeof (args[0]) === 'function') {
      return Args.reduce(args[0]);
    }
    Args = Args.concat(...args);
    return maked;
  };
  return maked;
};
