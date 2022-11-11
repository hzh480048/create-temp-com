var fs = require('fs');
const { vueTemplate } = require('./template.js')
let content = vueTemplate()
let pwd = process.env.INIT_CWD

var createFile = function (pathAndName) {
    if (!pathAndName) {
        throw new Error('缺少文件名参数')
    }
    console.log(pwd+'\\'+pathAndName)
    fs.writeFile(pathAndName, content, function (err) {
        if (err) {
            throw err;

        }
    });
}



module.exports = {createFile} 