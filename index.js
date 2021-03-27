// import 'babel-polyfill'
const data  = require('./src/data.js')
const req = require('./src/require.js')
import React from 'react'
console.log(React);
const getData = () => {
  const data = [1, 2, 3];
  return data;
  
};
const myData = getData()
console.log(data,myData,req);
// 类的装饰
// @testable 
// class MyTestTableClass {

// }
// function testable(target) {
//   target.isTestable = true
// }
// console.log(MyTestTableClass.isTestable);
