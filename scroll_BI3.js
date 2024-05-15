document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll('.box-image3');

    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Функция для показа блоков, находящихся в области видимости
    function showBoxes() {
        boxes.forEach(function(box) {
            var isInView = isInViewport(box);
            // Проверяем, находится ли текущий элемент в области видимости и имеет ли он класс 'active'
            if (isInView && !box.classList.contains('active')) {
                // Если элемент находится в области видимости и не имеет класса 'active', добавляем этот класс
                box.classList.add('active');
            } else if (!isInView && box.classList.contains('active')) {
                // Если элемент не находится в области видимости и имеет класс 'active', удаляем этот класс
                box.classList.remove('active');
            }
        });
    }

    // Run on page load
    showBoxes();

    // Run on scroll
    window.addEventListener('scroll', showBoxes);
});