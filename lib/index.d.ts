interface ISymbol {
    (name?: string): string;
    for(key: string): string;
    keyFor(key: string): string;
}
declare const imitateSymbol: ISymbol;
export default imitateSymbol;
