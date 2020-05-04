import { v4 as uuidv4 } from "uuid";

const IdMap: any = {};
const IdSet = new Set();

interface IObj {
    for(key: string): string;
    keyFor(key: string): string;
}

type Ifunc = (name?: string) => void;

const imitateSymbol: Ifunc & IObj = function (name?: string) {
    let uuid = uuidv4();
    while (IdSet.has(uuid)) {
        uuid = uuidv4();
    }
    IdSet.add(uuid);
    this.toString = this.valueOf = () => {
        return uuid;
    };
    if (name) {
        this.name = name;
        IdMap[name] = uuid;
    }
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

imitateSymbol.keyFor = (uuid: string) => {
    for (const key of Object.keys(IdMap)) {
        if (IdMap[key] === uuid) {
            return IdMap[key];
        }
    }
};

export default imitateSymbol;
