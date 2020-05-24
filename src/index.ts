import { v4 as uuidv4 } from "uuid";

const IdMap: any = {};
const IdSet = new Set();

interface ISymbol {
    (name?: string): string;
    for(key: string): string;
    keyFor(key: string): string;
}

const imitateSymbol: ISymbol = (name?: string) => {
    if (name && IdMap[name]) {
        return IdMap[name];
    }
    let uuid = uuidv4();
    while (IdSet.has(uuid)) {
        uuid = uuidv4();
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
    let uuid = uuidv4();
    while (IdSet.has(uuid)) {
        uuid = uuidv4();
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

export default imitateSymbol;
