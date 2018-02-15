/*eslint valid-jsdoc: "off"*/
/*eslint-env es6*/
'use strict';

const PromisedCsv = require('promised-csv');
const reader = new PromisedCsv();

/**
 *
 * @param {string} file
 */
module.exports = function (file) {
  let reqtList = [];

  reader.read(file, function (data) {
    let tiers = [];

    for (var index = 1; index < data.length; index++) {
      tiers.push(parseInt(data[index]));
    }
    const item = {
      itemId: data[0],
      tiers: tiers
    };
    reqtList.push(item);
  })
    .then(result => {
      console.dir(result);
    });

  //reader.on('done', function () {
  //  return reqtList;
  //});

  reader.on('error', function (error) {
    console.dir(error);
  });
};
