[![NPM version](https://badgen.net/npm/v/imitate-symbol)](https://www.npmjs.com/package/imitate-symbol)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/imitate-symbol)](https://www.npmjs.com/package/imitate-symbol)
[![License](https://badgen.net/npm/license/imitate-symbol)](https://www.npmjs.com/package/imitate-symbol)

# imitate-symbol

简单的模拟 Symbol 的功能，与 Symbol 的逻辑比较类似，但是 imitate-symbol 返回的是一个随机的唯一 uuid。

## 实例

```javascript
import imitateSymbol from "imitate-symbol";

var val = imitateSymbol("val");
console.log(val); // 63b86a81-5585-4f3a-bd76-fa5ec3c540ec
console.log(imitateSymbol.for("val")); // 63b86a81-5585-4f3a-bd76-fa5ec3c540ec
console.log(imitateSymbol.keyFor(val)); // val
```

## API

### `imitateSymbol(name?);`

生成一个 uuid

```javascript
var val = imitateSymbol("val");
```

#### name

Type: `String`

一个标识 uuid 的名字，可以不输入

### `imitateSymbol.for(name);`

查找标识为 name 的 uuid，如果没有就返回一个新生成的 uuid，并将其标识为 name

```javascript
imitateSymbol.for("val");
```

#### name

Type: `String`

一个标识 uuid 的名字，必须输入

### `imitateSymbol.keyFor(val);`

查找 uuid 的标识名，如果没有就返回空字符串

```javascript
imitateSymbol.keyFor(val);
```

#### val

Type: `String`

uuid 的值，必须输入
