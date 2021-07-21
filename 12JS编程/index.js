const mids = funcs.reduce((a, b) => {
  return (...args) => {
    return a(b(...args));
  };
});
