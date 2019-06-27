let path = require("path");
__dirname;//绝对路径
console.log(__dirname);
let r = path.resolve(__dirname,"app.js");//能拼三个
let r1 = path.join(__dirname,"app.js");
console.log(r);//Users/ruanye/Desktop/node-lesson/app.js