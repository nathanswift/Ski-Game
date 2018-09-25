module.exports = {
    clear: function(){
        const root = document.getElementById('root');
        root.innerHTML = null;
    },
    background: function(url) {
        const root = document.getElementById('root');
        root.style.backgroundImage = `url(${url})`;
    },
    append: function(elem) {
        const root = document.getElementById('root');
        root.appendChild(elem);
    }
}