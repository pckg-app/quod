const {merge} = require('webpack-merge');
const base = require('pckg-app-frontend/webpack.base.js');

let jsPath = './app/quod/public/js/';

module.exports = merge(base, {
    entry: {
        /**
         * Frontend assets that are used by all users.
         */
        libraries: [
            jsPath + 'libraries.js',
        ],
        app: [
            jsPath + 'app.js',
        ],
    },
    output: {
        path: __dirname + '/build'
    },
});