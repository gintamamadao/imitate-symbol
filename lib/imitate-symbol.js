'use strict';

var uuid = require('uuid');

var IdMap = {};
var IdSet = new Set();

var imitateSymbol = function _target(name) {
  var uuid$1 = uuid.v4();

  while (IdSet.has(uuid$1)) {
    uuid$1 = uuid.v4();
  }

  IdSet.add(uuid$1);

  if ((this instanceof _target ? this.constructor : void 0) === imitateSymbol && this) {
    this.toString = this.valueOf = function () {
      return uuid$1;
    };

    if (name) {
      this.name = name;
      IdMap[name] = uuid$1;
    }
  } else {
    if (name) {
      IdMap[name] = uuid$1;
    }

    return uuid$1;
  }
};

imitateSymbol["for"] = function (name) {
  if (IdMap[name]) {
    return IdMap[name];
  }

  var uuid$1 = uuid.v4();

  while (IdSet.has(uuid$1)) {
    uuid$1 = uuid.v4();
  }

  IdSet.add(uuid$1);
  IdMap[name] = uuid$1;
  return uuid$1;
};

imitateSymbol.keyFor = function (uuid) {
  for (var _i = 0, _Object$keys = Object.keys(IdMap); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];

    if (IdMap[key] === uuid) {
      return key;
    }
  }

  return "";
};

module.exports = imitateSymbol;
