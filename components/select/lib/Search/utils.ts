export function getNestedFieldValue(object: {}, path: Array<string>) {
  path = path || [];
  object = object || {};
  let value = object;
  for (let i = 0; i < path.length; i++) {
    value = value[path[i]];
    if (value == null) {
      return null;
    }
  }
  return value;
}
