function gen(name, mods) {
  if (!mods) {
    return '';
  }
  if (typeof mods === 'string') {
    return "".concat(name, "--").concat(mods);
  }
  if (Array.isArray(mods)) {
    return mods.reduce(function (ret, item) {
      return ret + gen(name, item);
    }, '');
  }
  return Object.keys(mods).reduce(function (ret, key) {
    return ret + (mods[key] ? gen(name, key) : '');
  }, '');
}
export var createClassName = function createClassName(name, mods) {
  if (!mods) {
    return 'mooli-' + name;
  }
  return "".concat(gen(name, mods));
};