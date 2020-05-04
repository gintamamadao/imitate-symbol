'use strict';

var uuid = require('uuid');

const IdMap = {};
const IdSet = new Set();

function imitateSymbol(name) {
  let uuid$1 = uuid.v4();

  while (IdSet.has(uuid$1)) {
    uuid$1 = uuid.v4();
  }

  IdSet.add(uuid$1);

  this.toString = this.valueOf = () => {
    return uuid$1;
  };

  this.name = name;
}

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

module.exports = imitateSymbol;
