/*eslint valid-jsdoc: "off"*/
/*eslint-env es6*/
'use strict';

const PromisedCsv = require('promised-csv');
const handler = new PromisedCsv();
const TIERLIMIT = 3;

/**
 *
 * @param {string} file
 */
module.exports = function (file) {
  let reqtList = [];

  console.log('Called from anonymous function');

  handler.on('row', function (data) {
    // accept only row header + 3 levels
    if (data.length !== TIERLIMIT) {
      const row = {
        id: data[0],
        tier1: parseInt(data[0]),
        tier2: parseInt(data[1]),
        tier3: parseInt(data[2])
      };
      reqtList.push(row);
    };
  });

  handler.on('done', function () {
    return reqtList;
  });
};
