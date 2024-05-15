// Ждем, пока весь документ будет полностью загружен
document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылки на элементы DOM
    const treeCard = document.querySelector('.dots-container'); // Контейнер для карточек отзывов
    const dotsContainer = document.querySelector('.dots-container'); // Контейнер для карточек отзывов
    const prevButton = document.getElementById('prevButton'); // Кнопка "Назад"
    const nextButton = document.getElementById('nextButton'); // Кнопка "Вперед"
    const cardWidth = dotsContainer.offsetWidth / 3; // Ширина карточки отзыва (деленная на 3, так как у нас 3 карточки на экране)
    let currentPosition = 0; // Текущая позиция слайдера

    cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
    cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
    cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
    cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
    cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
    cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
    cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
    cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера

    console.log(currentPosition);
    currentPosition -= cardWidth;
    dotsContainer.style.transform = `translateX(${currentPosition}px)`;
    console.log(currentPosition);
    currentPosition -= cardWidth;
    dotsContainer.style.transform = `translateX(${currentPosition}px)`;
    console.log(currentPosition);
    currentPosition -= cardWidth;
    dotsContainer.style.transform = `translateX(${currentPosition}px)`;
    console.log(currentPosition);
    currentPosition -= cardWidth;
    dotsContainer.style.transform = `translateX(${currentPosition}px)`;
    console.log(currentPosition);
    currentPosition -= cardWidth;
    dotsContainer.style.transform = `translateX(${currentPosition}px)`;
    console.log(currentPosition);
    currentPosition -= cardWidth;
    dotsContainer.style.transform = `translateX(${currentPosition}px)`;
    console.log(currentPosition);
    currentPosition -= cardWidth;
    dotsContainer.style.transform = `translateX(${currentPosition}px)`;

    // Обработчик события для кнопки "Вперед"
    prevButton.addEventListener('click', () => {
        console.log(currentPosition);
        // Уменьшаем текущую позицию на ширину карточки
        currentPosition -= cardWidth;
        // Если текущая позиция становится меньше, чем ширина карточки умноженная на количество карточек минус 3 (так как мы показываем только 3 карточки на экране), тогда клонируем карточки и перемещаемся в начало
        if (currentPosition < -cardWidth * (dotsContainer.children.length - 3)) {
            currentPosition = 0;
            cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
        }
        // Применяем трансформацию для перемещения карточек
        dotsContainer.style.transform = `translateX(${currentPosition}px)`;
    });

    // Обработчик события для кнопки "Назад"
    nextButton.addEventListener('click', () => {
        console.log(currentPosition);
        if (currentPosition < -750)
        {
            // Увеличиваем текущую позицию на ширину карточки
            currentPosition += cardWidth;
            // Если текущая позиция становится больше нуля, устанавливаем текущую позицию в конечную позицию и клонируем карточки
            if (currentPosition > 0) {
                currentPosition = -cardWidth * (dotsContainer.children.length - 3);
                cloneCards(); // Функция для клонирования карточек и добавления их в конец контейнера
            }
            // Применяем трансформацию для перемещения карточек
            dotsContainer.style.transform = `translateX(${currentPosition}px)`;
        }
    });

    // Функция для клонирования карточек и добавления их в конец контейнера
    function cloneCards() {
        const cards = Array.from(dotsContainer.children); // Получаем массив всех карточек отзывов
        for (let i = 0; i < cards.length; i++) {
            const clone = cards[i].cloneNode(true); // Клонируем каждую карточку
            dotsContainer.appendChild(clone); // Добавляем клон в конец контейнера
        }
    }
});