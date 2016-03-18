var ChnEscapec = require('./escape.js');

var esc = new ChnEscapec();

var list = [
    '中国',
    '共产党',
    '微软'
]

esc.init(list);
var str = '中$@%%国共;产;党万岁,热爱党和中國共產黨,';
console.log('检测语句:');
console.log(str);
console.log('查找到的关键词数组:');
console.log(esc.find(str));
console.log('净化后的结果');
console.log(esc.santize(str));