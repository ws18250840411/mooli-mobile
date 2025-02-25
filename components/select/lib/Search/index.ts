import { getNestedFieldValue } from './utils';

interface DocsType {
  [key: string]: string | DocsType | any;
}
type SearchableFieldType = string | string[];

class Search {
  private uidFieldName: string;
  private searchableFields: string[];
  private docs: DocsType[];
  private _tokenMap: {};
  constructor(
    uid: string,
    searchableField: SearchableFieldType = [],
    docs: DocsType[] = [],
  ) {
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
  reset(doc: DocsType[] = [], field: SearchableFieldType = []) {
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
  add(doc: DocsType[] = [], field: SearchableFieldType = []) {
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
  search(value: string) {
    const tokens: string[] = this._tokenize(this._sanitize(value));
    return this._search(tokens);
  }
  _search(tokens: string[]) {
    const uidToDocumentMap: DocsType = {};
    for (let i = 0, numTokens = tokens.length; i < numTokens; i++) {
      const token = tokens[i];
      const tokenMetadata = this._tokenMap[token];
      if (!tokenMetadata) {
        return [];
      }
      if (i === 0) {
        const keys = Object.keys(tokenMetadata.uidMaps);
        for (let j = 0, numKeys = keys.length; j < numKeys; j++) {
          const uid = keys[j];
          uidToDocumentMap[uid] = tokenMetadata.uidMaps[uid];
        }
      } else {
        const keys = Object.keys(uidToDocumentMap);
        for (let j = 0, numKeys = keys.length; j < numKeys; j++) {
          const uid = keys[j];
          if (typeof tokenMetadata.uidMaps[uid] !== 'object') {
            delete uidToDocumentMap[uid];
          }
        }
      }
    }
    const documents: any = [];
    for (const uid in uidToDocumentMap) {
      documents.push(uidToDocumentMap[uid]);
    }
    return documents;
  }
  _tokenize(text: string) {
    if (new RegExp('[\u4E00-\u9FA5]+').test(text)) {
      return text.split(/\s+/);
    } else {
      return text.split(/[^a-zа-яё0-9\-']+/i).filter((text) => text);
    }
  }
  _sanitize(text: string) {
    return text ? text.toLocaleLowerCase().trim() : '';
  }
  _expandToken(token: string) {
    const expandedTokens: string[] = [];
    while (token.length) {
      let string = '';
      for (let i = 0, length = token.length; i < length; ++i) {
        string += token.charAt(i);
        expandedTokens.push(string);
      }
      token = token.substring(1);
    }
    return expandedTokens;
  }
  _mapRelation() {
    for (let i = 0; i < this.docs.length; i++) {
      const doc = this.docs[i];
      let uid: string | {} | null;
      if (Array.isArray(this.uidFieldName)) {
        uid = getNestedFieldValue(doc, this.uidFieldName);
      } else {
        uid = doc[this.uidFieldName];
      }
      for (let j = 0; j < this.searchableFields.length; j++) {
        const searchableField = this.searchableFields[j];
        let fieldValue: {} | null;
        if (Array.isArray(searchableField)) {
          fieldValue = getNestedFieldValue(doc, searchableField);
        } else {
          fieldValue = doc[searchableField];
        }
        if (
          fieldValue != null &&
          typeof fieldValue !== 'string' &&
          fieldValue.toString
        ) {
          fieldValue = fieldValue.toString();
        }
        if (typeof fieldValue === 'string') {
          const fieldTokens = this._tokenize(this._sanitize(fieldValue));
          for (let k = 0; k < fieldTokens.length; k++) {
            const fieldToken = fieldTokens[k];
            const expandedTokens = this._expandToken(fieldToken);
            for (let l = 0; l < expandedTokens.length; l++) {
              const expandedToken = expandedTokens[l];
              this._createMap(expandedToken, uid, doc);
            }
          }
        }
      }
    }
  }
  _createMap(token: string, uid: string | {} | null, doc: DocsType) {
    const tokenMap = this._tokenMap;
    let tokenDatum: { totals: number; uidMaps: DocsType };
    if (typeof tokenMap[token] !== 'object') {
      tokenMap[token] = tokenDatum = {
        totals: 1,
        uidMaps: {},
      };
    } else {
      tokenDatum = tokenMap[token];
      tokenDatum.totals++;
    }
    const uidMap = tokenDatum.uidMaps;

    if (typeof uidMap[uid as string] !== 'object') {
      uidMap[uid as string] = doc;
    }
  }
}

export default Search;
