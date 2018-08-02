#!/usr/bin/env node

// var fs = require('fs')
// var dirName = process.argv[2]

// fs.access("./dirName",function(err){
//     if(err.code == "ENOENT"){
//         fs.mkdirSync("./" + dirName) // mkdir $1
//         process.chdir("./" + dirName) // cd $1
//         fs.mkdirSync('css') // mkdir css
//         fs.mkdirSync('js') // mkdir js
        
//         fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
//         fs.writeFileSync("css/style.css", "h1{color: red;}")
//         fs.writeFileSync("./js/main.js", "var string = \"Hello World\"\nalert(string)")
        
//         process.exit(0)
//     }
//     else{
//         console.log("sss");
//     }
// }) 不能用？？ exists也不能用？？

var fs = require('fs')
var dirName = process.argv[2]
try{
fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js
        
fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", "var string = \"Hello World\"\nalert(string)")
        
process.exit(0)
}
catch(e){
    console.log("已存在");
}
    //只能将错误拉出来说明已存在

