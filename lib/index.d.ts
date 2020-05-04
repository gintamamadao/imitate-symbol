interface IObj {
    for(key: string): string;
    keyFor(key: string): string;
}
declare type Ifunc = (name?: string) => void;
declare const imitateSymbol: Ifunc & IObj;
export default imitateSymbol;
