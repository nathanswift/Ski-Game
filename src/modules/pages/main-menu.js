const root = require('../services/root');

module.exports = {
    load: new Promise(function(res, rej) {
        if (true) {
            res();
        } else {
            rej();
        }
    }),
    display: function() {
        // main build
        root.clear();
        console.log(true);
    }
}