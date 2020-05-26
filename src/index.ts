import { v4 as uuidv4 } from "uuid";

const IdMap: any = {};
const IdSet = new Set();
const SIGN = `${uuidv4().slice(0, 9)}`;

interface ISymbol {
    (name?: string): string;
    for(key: string): string;
    keyFor(key: string): string;
    is(key: string): boolean;
    setVal<T extends Object>(obj: T, key: string, value: any): T;
}

const imitateSymbol: ISymbol = (name?: string) => {
    if (name && IdMap[name]) {
        return IdMap[name];
    }
    let uuid = SIGN + uuidv4();
    while (IdSet.has(uuid)) {
        uuid = SIGN + uuidv4();
    }
    IdSet.add(uuid);
    if (name) {
        IdMap[name] = uuid;
    }
    return uuid;
};

imitateSymbol.for = (name: string) => {
    if (IdMap[name]) {
        return IdMap[name];
    }
    let uuid = SIGN + uuidv4();
    while (IdSet.has(uuid)) {
        uuid = SIGN + uuidv4();
    }
    IdSet.add(uuid);
    IdMap[name] = uuid;
    return uuid;
};

imitateSymbol.keyFor = (val: string): string => {
    for (const key of Object.keys(IdMap)) {
        if (IdMap[key] === val) {
            return key;
        }
    }
    return "";
};

imitateSymbol.is = (val: string): boolean => {
    return IdSet.has(val);
};

imitateSymbol.setVal = <T extends Object>(
    obj: T,
    key: string,
    value: any
): T => {
    const iKey = imitateSymbol.is(key) ? key : imitateSymbol.for(key);
    if (obj.hasOwnProperty(iKey)) {
        obj[iKey] = value;
        return obj;
    }
    Object.defineProperty(obj, iKey, {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true,
    });
    return obj;
};

export default imitateSymbol;
