let fs = require("fs");
let fsPromise = fs.promises;//node 10版本以上
//读取文件  readFile 参数 文件路径
fsPromise.readFile('./app.js',"utf-8").then(data=>{
    console.log(data)
});
//写入文件 writeFile 参数1 要写入的文件路径  2要写入的数据 3.写入的数据格式
fsPromise.writeFile('./a.txt',"12985","utf-8").then(data=>{
    console.log("写入成功")
});

//读取 json转对象 数组 push 放新的数据 写入文件