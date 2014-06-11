var browserify_alias = require('../utils/browserify_alias');

var alias = browserify_alias.getBowerAlias();

module.exports = {
    dist: {
        files: {
            './build/js/main_app.js': ['./src/js/main_app.react.js']
        },
        options: {
            transform:  [ require('grunt-react').browserify ],
            alias: alias
        }
    }
};