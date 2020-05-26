const imitateSymbol = require("../lib/imitate-symbol");

describe("imitateSymbol", () => {
    const val = imitateSymbol("val");
    test(`only`, () => {
        expect(imitateSymbol() !== val).toBeTruthy();
    });
    test(`only`, () => {
        const test = () => {
            for (let i = 0; i < 10000; i++) {
                if (imitateSymbol() === val) {
                    return false;
                }
            }
            return true;
        };
        expect(test()).toBeTruthy();
    });
    test(`for`, () => {
        expect(imitateSymbol.for("val") === val).toBeTruthy();
    });
    test(`for`, () => {
        const test = () => {
            for (let i = 0; i < 10000; i++) {
                if (imitateSymbol.for("val") !== val) {
                    return false;
                }
            }
            return true;
        };
        expect(test()).toBeTruthy();
    });
    test(`for`, () => {
        expect(imitateSymbol.keyFor(val) === "val").toBeTruthy();
    });
    test(`is`, () => {
        expect(imitateSymbol.is(val)).toBeTruthy();
    });
    test(`setVal`, () => {
        const test = () => {
            let obj = {
                key: "value",
            };
            imitateSymbol.setVal(obj, "val", "val value");
            return obj[imitateSymbol.for("val")] === "val value";
        };
        expect(test()).toBeTruthy();
    });
    test(`setVal`, () => {
        const test = () => {
            let obj = {
                key: "value",
            };
            imitateSymbol.setVal(obj, "val", "val value");
            imitateSymbol.setVal(obj, "val", "val value2");
            return obj[imitateSymbol.for("val")] === "val value2";
        };
        expect(test()).toBeTruthy();
    });
    test(`setVal`, () => {
        const test = () => {
            let obj = {
                key: "value",
            };
            imitateSymbol.setVal(obj, "val", "val value");
            delete obj[imitateSymbol.for("val")];
            return obj[imitateSymbol.for("val")] === undefined;
        };
        expect(test()).toBeTruthy();
    });
    test(`setVal`, () => {
        const test = () => {
            let obj = {
                key: "value",
            };
            imitateSymbol.setVal(obj, val, "val value");
            return obj[imitateSymbol.keyFor(val)] === undefined;
        };
        expect(test()).toBeTruthy();
    });
    test(`setVal`, () => {
        const test = () => {
            let obj = {
                key: "value",
            };
            imitateSymbol.setVal(obj, "val", "val value");
            return JSON.stringify(obj) === '{"key":"value"}';
        };
        expect(test()).toBeTruthy();
    });
});
