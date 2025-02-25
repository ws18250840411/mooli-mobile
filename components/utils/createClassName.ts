function gen(name: string, mods?: any): string {
  if (!mods) {
    return '';
  }

  if (typeof mods === 'string') {
    return `${name}--${mods}`;
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string>((ret, item) => ret + gen(name, item), '');
  }

  return Object.keys(mods).reduce(
    (ret, key) => ret + (mods[key] ? gen(name, key) : ''),
    ''
  );
}
export const createClassName = (name: string, mods?: any) => {
  if (!mods) {
    return 'mooli-' + name;
  }
  return `${gen(name, mods)}`
}
