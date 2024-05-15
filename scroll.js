// Ждем, пока весь HTML-документ будет полностью загружен и разобран перед выполнением скрипта
document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы с классом 'box-images' и сохраняем их в переменную 'boxes'
    var boxes = document.querySelectorAll('.box-images');

    // Функция для проверки, находится ли элемент в области видимости
    function isInViewport(element) {
        // Получаем прямоугольник (bounding box), описывающий позицию элемента относительно видимой области окна браузера
        var rect = element.getBoundingClientRect();
        // Возвращаем true, если элемент находится в видимой области, и false в противном случае
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
    

    // Вызываем функцию 'showBoxes()' один раз при загрузке страницы, чтобы отобразить блоки, находящиеся в области видимости
    showBoxes();

    // Запускаем функцию 'showBoxes()' при каждом событии прокрутки страницы, чтобы показывать блоки, когда они попадают в область видимости
    window.addEventListener('scroll', function() {
        showBoxes();
    });
});
