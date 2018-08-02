#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2]

fs.exists("./dirName",function(exists){
    if(exists)
    {
        console.log("该文件已存在");
    }
    else{
        fs.mkdirSync("./" + dirName) // mkdir $1
        process.chdir("./" + dirName) // cd $1
        fs.mkdirSync('css') // mkdir css
        fs.mkdirSync('js') // mkdir js
        
        fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")
        fs.writeFileSync("css/style.css", "h1{color: red;}")
        fs.writeFileSync("./js/main.js", "var string = \"Hello World\"\nalert(string)")
        
        process.exit(0)
    }
})

