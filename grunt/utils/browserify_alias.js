var fs = require('fs');
var path = require('path');

function getBowerAlias(bower_dir){
    if (!bower_dir){
        bower_dir = './bower_components'
    }
    return getFileNames(bower_dir);
}

function getFileNames(bower_dir){
    var alias = [];
    var dirs = fs.readdirSync(bower_dir);
    for (var key in dirs){
        if (dirs.hasOwnProperty(key)){
            var dir = dirs[key];
            var alias_item = getBowerAliasItem(path.join(bower_dir, dir));
            if (alias_item){
                alias.push(alias_item);
            }
        }
    }
    return alias;
}

function getBowerAliasItem(dir){
    var bower_json = getBowerJson(dir);
    if (bower_json){
        if (bower_json.hasOwnProperty('main') &&
            bower_json['main'] &&
            bower_json.hasOwnProperty('name') &&
            bower_json['name'] &&
            typeof(bower_json['main']) === 'string'){

            var file_path = path.join(dir, bower_json['main']);
            return './' + file_path + ':' + bower_json['name'];
        }
    }
    return null;
}

function getBowerJson(dir, callback){
    var bower_file;
    if (fs.existsSync(path.join(dir, '.bower.json'))){
        bower_file = path.join(dir, '.bower.json')
    }else
    {
        if (fs.existsSync(path.join(dir, 'bower.json'))){
            bower_file = path.join(dir, 'bower.json')
        }
    }
    if (bower_file){
        var data = fs.readFileSync(bower_file, 'utf8');
        return JSON.parse(data);
    }
    return null;
}

module.exports = {
    getBowerAlias: getBowerAlias
};