module.exports = {
    load: function(page) {
        const root = document.getElementById('root');
        let elem = document.createElement('h1');
        elem.innerText = 'Loading...';
        root.appendChild(elem);
    }
}