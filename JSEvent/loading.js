setTimeout(function() {
    var element = document.querySelector('.loading');
    if (element) {
        element.style.height = '0vh';
        document.querySelector('.loading>img').style.display = 'none';
    }
}, 1500);
