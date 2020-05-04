'use strict';

var uuid = require('uuid');

const IdMap = {};
const IdSet = new Set();

const imitateSymbol = function (name) {
  let uuid$1 = uuid.v4();

  while (IdSet.has(uuid$1)) {
    uuid$1 = uuid.v4();
  }

  IdSet.add(uuid$1);

  this.toString = this.valueOf = () => {
    return uuid$1;
  };

  if (name) {
    this.name = name;
    IdMap[name] = uuid$1;
  }
};

imitateSymbol.for = name => {
  if (IdMap[name]) {
    return IdMap[name];
  }

  let uuid$1 = uuid.v4();

  while (IdSet.has(uuid$1)) {
    uuid$1 = uuid.v4();
  }

  IdSet.add(uuid$1);
  IdMap[name] = uuid$1;
  return uuid$1;
};

imitateSymbol.keyFor = uuid => {
  for (const key of Object.keys(IdMap)) {
    if (IdMap[key] === uuid) {
      return IdMap[key];
    }
  }
};

module.exports = imitateSymbol;
