export const customeFieldNames = (
  data: any[],
  fieldNames?: {
    text?: string;
    value?: string;
    children?: string;
    level?: string;
    regionalLevel?: number;
  }
) => {
  const afterArr: any = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const text = (fieldNames && fieldNames.text) || "text";
    const value = (fieldNames && fieldNames.value) || "value";
    const regionalLevel =
      (fieldNames && fieldNames.regionalLevel) || "regionalLevel";
    const level = (fieldNames && fieldNames.level) || "level";
    const children = (fieldNames && fieldNames.children) || "children";
    let curItem: any = {};
    if (item[text]) {
      curItem["text"] = item[text];
    }
    if (item[value]) {
      curItem["value"] = String(item[value]);
    }
    if (item[level]) {
      curItem["level"] = item[level];
    }
    if (item["regionalLevel"] < regionalLevel) {
      curItem["children"] = [];
    }
    if (item[children]) {
      curItem["children"] = customeFieldNames(item[children], fieldNames);
    }
    afterArr.push(curItem);
  }
  return afterArr;
};

export const getActiveTab = (obj: any) => {
  if (!obj) return 2;
  if (obj.hasOwnProperty("villageId") && obj.villageId) {
    return 5;
  }
  if (obj.hasOwnProperty("districtId") && obj.districtId) {
    return 4;
  }
  if (obj.hasOwnProperty("cityId") && obj.cityId) {
    return 3;
  }
  if (obj.hasOwnProperty("provinceId") && obj.provinceId) {
    return 2;
  }
  return 2;
}
