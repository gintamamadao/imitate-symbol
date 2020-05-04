import { v4 as uuidv4 } from "uuid";

const IdMap = {};
const IdSet = new Set();

interface IObj {
    for(key: string): symbol;
}

type Ifunc = (name?: string) => void;

const imitateSymbol: Ifunc & IObj = function (name) {
    let uuid = uuidv4();
    while (IdSet.has(uuid)) {
        uuid = uuidv4();
    }
    IdSet.add(uuid);
    this.toString = this.valueOf = () => {
        return uuid;
    };
    this.name = name;
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

export default imitateSymbol;
