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
        for (var index = 1; index < Object.keys(result).length; index++) {
          const tier = 'tier' + index.toString();
          tiers.push(parseInt(result[tier]));
        }
        list.push({
          itemId: result.itemId,
          tiers: tiers
        });
      }
      return list;
    });
};
