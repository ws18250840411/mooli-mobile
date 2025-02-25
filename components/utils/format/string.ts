const camelizeRE = /-(\w)/g;

export function camelize(str: string): string {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

export function padZero(num: number | string, targetLength = 2): string {
  let str = String(num);

  while (str.length < targetLength) {
    str = '0' + str;
  }

  return str;
}
