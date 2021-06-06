// 主要关注load和load.keys这两个参数
const load = require.context("./svg",false,/\.svg$/);
console.log(load.keys());
load.keys().map(load);
