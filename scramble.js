(function () {
    function rot13(s) {
        return s.replace(/[a-zA-Z]/g, function (c) {
            var base = c <= 'Z' ? 65 : 97;
            return String.fromCharCode((c.charCodeAt(0) - base + 13) % 26 + base);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var links = document.querySelectorAll('.scrambled-email');
        links.forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                var decoded = rot13(el.textContent.trim());
                el.textContent = decoded;
                el.setAttribute('href', 'mailto:' + decoded);
                window.location.href = 'mailto:' + decoded;
            });
        });
    });
})();
