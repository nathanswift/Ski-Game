// services
const load = require('./modules/services/load'),
    gameOver = require('./modules/services/game-over');

// pages 
const menu = require('./modules/pages/main-menu');

// init page load
(function () {
    load(menu);
})();