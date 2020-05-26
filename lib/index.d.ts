interface ISymbol {
    (name?: string): string;
    for(key: string): string;
    keyFor(key: string): string;
    is(key: string): boolean;
    setVal<T = any>(obj: T, key: string, value: any): T;
}
declare const imitateSymbol: ISymbol;
export default imitateSymbol;
