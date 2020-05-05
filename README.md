# imitate-symbol

简单的模拟 Symbol 的功能，与 Symbol 的逻辑比较类似，但是 imitate-symbol 返回的是一个随机的唯一 uuid。

# 实例

```js
import imitateSymbol from "imitate-symbol";

var a = new imitateSymbol("a");
console.log(`${a}`); // 281b297f-3e72-4d16-b483-d11e133055a8
console.log(imitateSymbol.for("a")); // 281b297f-3e72-4d16-b483-d11e133055a8
console.log(imitateSymbol.keyFor(`${a}`)); // a

var b = imitateSymbol("d");
console.log(b); // 63b86a81-5585-4f3a-bd76-fa5ec3c540ec
console.log(imitateSymbol.for("b")); // 63b86a81-5585-4f3a-bd76-fa5ec3c540ec
console.log(imitateSymbol.keyFor(b)); // b

var c = imitateSymbol();
console.log(c); // 2923ce23-9205-4bf1-beaf-8e0779bc7e3e
console.log(imitateSymbol.for("c")); // 8ecda4bd-3988-4035-af47-a9d698cff8eb
console.log(imitateSymbol.for("c")); // 8ecda4bd-3988-4035-af47-a9d698cff8eb
console.log(imitateSymbol.keyFor(imitateSymbol.for("c"))); // c
```
