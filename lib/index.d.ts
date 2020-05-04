interface IObj {
    for(key: string): symbol;
}
declare type Ifunc = (name?: string) => void;
declare const imitateSymbol: Ifunc & IObj;
export default imitateSymbol;
