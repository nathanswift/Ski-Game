const root = require('../services/root'),
    btns = require('../../assets/json/main-menu-btns');

module.exports = {
    load: new Promise(function (res, rej) {
        if (true) {
            res();
        } else {
            rej();
        }
    }),
    display: function () {
        root.clear();
        console.log(btns);
    }
}