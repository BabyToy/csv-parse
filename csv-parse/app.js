/*eslint valid-jsdoc: "off"*/
/*eslint-env es6*/
'use strict';

const parser = require('./csv-parser');
const csvData = require('./csv-data');

csvData('card-reqts.csv')
  .then(list => { console.dir(list) });

//let list = [];
//parser('card-reqts.csv')
//  .then(result => {
//    list = result;
//  });
//console.dir(list);
