const path = require('path');

module.exports = {
    entry: './src/index.js',
    watch: true,
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.min.js'
    }
}