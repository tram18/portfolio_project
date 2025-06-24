
(function (d) {

    const nav = d.querySelector('.navigation-nav');
    const btn = d.querySelector('.hamburger-btn');

    btn.addEventListener('click', function () {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });

})(document);