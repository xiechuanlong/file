const fs = require('fs');
const path = require('path');
const { isAbsolutePath } = require('./util/index')

// 同步创建文件夹
function mkdirSync(path) {
    let splitPath = path.split('/');
    if(!isAbsolutePath(path)) {
        console.error('path master be absolute')
        return 
    }
    let curPath = ''
    while(splitPath.length) {
        curPath += `/${splitPath.shift()}`
        if (!fs.existsSync(curPath)) {
            fs.mkdirSync(curPath)    
        }
    }
}

function mkdirAsync(path) {
    return new Promise((resolve, reject) => {
        setImmediate(() => {
            try {
                mkdirSync(path)
                resolve()
            } catch(e) {
                reject(e)
            }
        })
    })
}

module.exports = {
    mkdirAsync,
    mkdirSync
}
