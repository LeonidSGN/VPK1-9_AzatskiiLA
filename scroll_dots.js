document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll('.dots');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showBoxes() {
        boxes.forEach(function(box) {
            if (isInViewport(box)) {
                box.classList.add('active');
            }
        });
    }

    // Run on page load
    showBoxes();

    // Run on scroll
    window.addEventListener('scroll', showBoxes);
});
