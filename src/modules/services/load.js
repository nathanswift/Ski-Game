const root = require('../services/root');

module.exports = function(page) {
    root.clear();
    // TODO: ui before page is loaded...
    page.load.then(page.display);
}