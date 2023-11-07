var mouseMove = document.querySelector('.mouse');

document.onmousemove = function(e) {
    var x = e.pageX - window.scrollX;
    var y = e.pageY - window.scrollY;
    mouseMove.style.left = x + 'px';
    mouseMove.style.top = y + 'px';
    mouseMovePoint.style.left = x + 'px';
    mouseMovePoint.style.top = y + 'px';
}

var mouseMovePoint = document.querySelector('.mousePoint');

var links = document.querySelectorAll('a');
links.forEach(function(links) {
    links.addEventListener('mouseover', function() {
        mouseMovePoint.style.width = 60 + 'px';
        mouseMovePoint.style.height = 60 + 'px';
        mouseMovePoint.style.transition = '0.3s';
        mouseMovePoint.style.borderRadius = '20px';
    });
    links.addEventListener('mouseleave', function() {
        mouseMovePoint.style.width = 10 + 'px';
        mouseMovePoint.style.height = 10 + 'px';
        mouseMovePoint.style.transition = '0.001s';
    });
}); 
var button = document.querySelectorAll('.toggleBtn, .tool_3_option, .tool_1>img, .Theme_format, .selection_format, .out_setting, .cover_edit_trim_box_element, .format-container, #submit-button, .uploader ');
button.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        mouseMovePoint.style.width = 60 + 'px';
        mouseMovePoint.style.height = 60 + 'px';
        mouseMovePoint.style.transition = '0.3s';
        mouseMovePoint.style.borderRadius = '20px';
    });
    button.addEventListener('mouseleave', function() {
        mouseMovePoint.style.width = 10 + 'px';
        mouseMovePoint.style.height = 10 + 'px';
        mouseMovePoint.style.transition = '0.001s';
    });
});

