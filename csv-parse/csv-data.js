/*eslint valid-jsdoc: "off"*/
/*eslint-env es6*/
'use strict';

const reader = require('csvdata');

module.exports = function (file) {
  return reader.load(file, { log: false })
    .then(results => {
      let list = [];
      for (var result of results) {
        let tiers = [];
        const thisObject = Object.keys(result);
        for (var index = 1; index < thisObject.length; index++) {
          const tier = result[thisObject[index]];
          tiers.push(tier);
        }
        list.push({
          itemId: result.itemId,
          tiers: tiers
        });
      }
      return list;
    });
};
