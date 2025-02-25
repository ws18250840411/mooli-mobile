interface DocsType {
    [key: string]: string | DocsType | any;
}
declare type SearchableFieldType = string | string[];
declare class Search {
    private uidFieldName;
    private searchableFields;
    private docs;
    private _tokenMap;
    constructor(uid: string, searchableField?: SearchableFieldType, docs?: DocsType[]);
    reset(doc?: DocsType[], field?: SearchableFieldType): void;
    add(doc?: DocsType[], field?: SearchableFieldType): void;
    search(value: string): any;
    _search(tokens: string[]): any;
    _tokenize(text: string): string[];
    _sanitize(text: string): string;
    _expandToken(token: string): string[];
    _mapRelation(): void;
    _createMap(token: string, uid: string | {} | null, doc: DocsType): void;
}
export default Search;
