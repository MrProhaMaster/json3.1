document.addEventListener('DOMContentLoaded', function () {
    function onScroll() {
        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach(reveal => {
            const rect = reveal.getBoundingClientRect();
            // Проверяем, находится ли верхняя граница элемента в видимой части окна
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                reveal.classList.add('reveal_active');
            } else {
                reveal.classList.remove('reveal_active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Запускаем чтоб проверить элементы при загрузке
});