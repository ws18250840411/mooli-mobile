function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { getNestedFieldValue } from './utils';
var Search = /*#__PURE__*/function () {
  function Search(uid) {
    var searchableField = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var docs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    _classCallCheck(this, Search);
    this._tokenMap = {};
    this.searchableFields = [];
    if (searchableField) {
      if (Array.isArray(searchableField)) {
        this.searchableFields = this.searchableFields.concat(searchableField);
      } else {
        this.searchableFields.push(searchableField);
      }
    }
    this.uidFieldName = uid;
    this.docs = docs;
    this._mapRelation();
  }
  _createClass(Search, [{
    key: "reset",
    value: function reset() {
      var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (field) {
        if (Array.isArray(field)) {
          this.searchableFields = this.searchableFields.concat(field);
        } else {
          this.searchableFields.push(field);
        }
      }
      this.docs = doc;
      this._mapRelation();
    }
  }, {
    key: "add",
    value: function add() {
      var doc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      if (field) {
        if (Array.isArray(field)) {
          this.searchableFields = this.searchableFields.concat(field);
        } else {
          this.searchableFields.push(field);
        }
      }
      this.docs = this.docs.concat(doc);
      this._mapRelation();
    }
  }, {
    key: "search",
    value: function search(value) {
      var tokens = this._tokenize(this._sanitize(value));
      return this._search(tokens);
    }
  }, {
    key: "_search",
    value: function _search(tokens) {
      var uidToDocumentMap = {};
      for (var i = 0, numTokens = tokens.length; i < numTokens; i++) {
        var token = tokens[i];
        var tokenMetadata = this._tokenMap[token];
        if (!tokenMetadata) {
          return [];
        }
        if (i === 0) {
          var keys = Object.keys(tokenMetadata.uidMaps);
          for (var j = 0, numKeys = keys.length; j < numKeys; j++) {
            var uid = keys[j];
            uidToDocumentMap[uid] = tokenMetadata.uidMaps[uid];
          }
        } else {
          var _keys = Object.keys(uidToDocumentMap);
          for (var _j = 0, _numKeys = _keys.length; _j < _numKeys; _j++) {
            var _uid = _keys[_j];
            if (_typeof(tokenMetadata.uidMaps[_uid]) !== 'object') {
              delete uidToDocumentMap[_uid];
            }
          }
        }
      }
      var documents = [];
      for (var _uid2 in uidToDocumentMap) {
        documents.push(uidToDocumentMap[_uid2]);
      }
      return documents;
    }
  }, {
    key: "_tokenize",
    value: function _tokenize(text) {
      if (new RegExp("[\u4E00-\u9FA5]+").test(text)) {
        return text.split(/\s+/);
      } else {
        return text.split(/[^a-zа-яё0-9\-']+/i).filter(function (text) {
          return text;
        });
      }
    }
  }, {
    key: "_sanitize",
    value: function _sanitize(text) {
      return text ? text.toLocaleLowerCase().trim() : '';
    }
  }, {
    key: "_expandToken",
    value: function _expandToken(token) {
      var expandedTokens = [];
      while (token.length) {
        var string = '';
        for (var i = 0, length = token.length; i < length; ++i) {
          string += token.charAt(i);
          expandedTokens.push(string);
        }
        token = token.substring(1);
      }
      return expandedTokens;
    }
  }, {
    key: "_mapRelation",
    value: function _mapRelation() {
      for (var i = 0; i < this.docs.length; i++) {
        var doc = this.docs[i];
        var uid = void 0;
        if (Array.isArray(this.uidFieldName)) {
          uid = getNestedFieldValue(doc, this.uidFieldName);
        } else {
          uid = doc[this.uidFieldName];
        }
        for (var j = 0; j < this.searchableFields.length; j++) {
          var searchableField = this.searchableFields[j];
          var fieldValue = void 0;
          if (Array.isArray(searchableField)) {
            fieldValue = getNestedFieldValue(doc, searchableField);
          } else {
            fieldValue = doc[searchableField];
          }
          if (fieldValue != null && typeof fieldValue !== 'string' && fieldValue.toString) {
            fieldValue = fieldValue.toString();
          }
          if (typeof fieldValue === 'string') {
            var fieldTokens = this._tokenize(this._sanitize(fieldValue));
            for (var k = 0; k < fieldTokens.length; k++) {
              var fieldToken = fieldTokens[k];
              var expandedTokens = this._expandToken(fieldToken);
              for (var l = 0; l < expandedTokens.length; l++) {
                var expandedToken = expandedTokens[l];
                this._createMap(expandedToken, uid, doc);
              }
            }
          }
        }
      }
    }
  }, {
    key: "_createMap",
    value: function _createMap(token, uid, doc) {
      var tokenMap = this._tokenMap;
      var tokenDatum;
      if (_typeof(tokenMap[token]) !== 'object') {
        tokenMap[token] = tokenDatum = {
          totals: 1,
          uidMaps: {}
        };
      } else {
        tokenDatum = tokenMap[token];
        tokenDatum.totals++;
      }
      var uidMap = tokenDatum.uidMaps;
      if (_typeof(uidMap[uid]) !== 'object') {
        uidMap[uid] = doc;
      }
    }
  }]);
  return Search;
}();
export default Search;