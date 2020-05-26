[![NPM version](https://badgen.net/npm/v/imitate-symbol)](https://www.npmjs.com/package/imitate-symbol)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/imitate-symbol)](https://www.npmjs.com/package/imitate-symbol)
[![License](https://badgen.net/npm/license/imitate-symbol)](https://www.npmjs.com/package/imitate-symbol)

# imitate-symbol

简单的模拟 Symbol 的功能，与 Symbol 的逻辑比较类似，但是 imitate-symbol 返回的是一个随机的唯一 uuid。

## 实例

```js
import iSymbol from "imitate-symbol";

var val = iSymbol("val");
console.log(val); // 8039bc24-52f0c187-1fd1-4695-99a1-3f0657e61642
console.log(iSymbol.for("val")); // 8039bc24-52f0c187-1fd1-4695-99a1-3f0657e61642
console.log(iSymbol.keyFor(val)); // val
```

## API

### `iSymbol(name?);`

生成一个 uuid

```js
var val = iSymbol("val");
```

#### name

Type: `String`

一个标识 uuid 的名字，可以不输入

### `iSymbol.for(name);`

查找标识为 name 的 uuid，如果没有就返回一个新生成的 uuid，并将其标识为 name

```js
iSymbol.for("val");
```

#### name

Type: `String`

一个标识 uuid 的名字，必须输入

### `iSymbol.keyFor(val);`

查找 uuid 的标识名，如果没有就返回空字符串

```js
iSymbol.keyFor(val);
```

#### val

Type: `String`

uuid 的值，必须输入

### `iSymbol.is(val);`

判断 uuid 是否由 iSymbol 生成

```js
iSymbol.is(val);
```

#### val

Type: `String`

uuid 的值，必须输入

### `iSymbol.setVal(obj, key, value);`

将对象 obj 的 key 属性的值设置为 value, 和原生 Symbol 属性一样， key 属性不可以枚举，但可以删除和重新赋值

```js
iSymbol.setVal({}, "val", "some value");
```

#### obj

Type: `Object`

要设置值的对象

#### key

Type: `String`

要设置的属性名

#### value

Type: `any`

要设置的属性值

#### 例子

```js
var obj = {
    key: "key value",
};
isymbol.setVal(obj, "val", "val value");
console.log(obj[isymbol.for("val")]); // val value
console.log(JSON.stringify(obj)); // {"key":"key value"}
```
