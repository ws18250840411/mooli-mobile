"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getActiveTab = exports.customeFieldNames = void 0;
var customeFieldNames = exports.customeFieldNames = function customeFieldNames(data, fieldNames) {
  var afterArr = [];
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var text = fieldNames && fieldNames.text || "text";
    var value = fieldNames && fieldNames.value || "value";
    var regionalLevel = fieldNames && fieldNames.regionalLevel || "regionalLevel";
    var level = fieldNames && fieldNames.level || "level";
    var children = fieldNames && fieldNames.children || "children";
    var curItem = {};
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
var getActiveTab = exports.getActiveTab = function getActiveTab(obj) {
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
};