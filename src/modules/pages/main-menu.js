const root = require('../services/root'),
    json = require('../../assets/json/main-menu'),
    load = require('../services/load');

module.exports = {
    load: new Promise(function (res, rej) {
        if (true) {
            res();
        } else {
            rej();
        }
    }),
    display: function () {
        // clear app
        root.clear();
        // setup root ui
        root.background(json.background);
        // title
        let title = document.createElement('h1');
        title.classList.add('title');
        title.innerText = json.title;
        root.append(title);
        // main btns
        let btns = json.btns;
        for (let i = 0; i < btns.length; i++) {
            let btn = document.createElement('div');
            btn.classList.add('btn');
            btn.innerText = btns[i].text;
            btn.setAttribute('data-page', btn.page);
            btn.onclick = function () {
                const page = this.getAttribute('data-page');
                load(page);
            }
            root.append(btn);
        }
        // footer 
        let footer = document.createElement('h1');
        footer.classList.add('footer');
        footer.innerText = json.footer.text;
        root.append(footer);
        // links
        var links = json.footer.links;
        for (let i = 0; i < links.length; i++) {
            var link = document.createElement('a');
            link.classList.add('footer-link');
            link.innerText = links[i].text;
            link.setAttribute('href', links[i].page);
            link.setAttribute('target', 'blank');
            root.append(link);
        }
    }
}