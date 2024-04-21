exports.isAbsolutePath = function(path) {
    path = path.replace(/\\/g, '/')
    let splitPath = path.split('/');
    return !splitPath.shift()
}