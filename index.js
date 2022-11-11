const { createFile } = require("./files.js")

function init() {
    console.log(process)
    createFile(process.argv[2])
}
init()
exports = init