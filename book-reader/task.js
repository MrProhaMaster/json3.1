document.addEventListener('DOMContentLoaded', function () {
    const book = document.getElementById('book');
    const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', function (event) {
            event.preventDefault();

            // Убираем класс font-size_active у всех контролов
            fontSizeControls.forEach(ctrl => ctrl.classList.remove('font-size_active'));

            // Добавляем класс font-size_active к текущему контролу
            control.classList.add('font-size_active');

            // Убираем классы для размера шрифта у книги
            book.classList.remove('book_fs-small', 'book_fs-big');

            // Добавляем соответствующий класс в зависимости от выбранного размера
            if (control.dataset.size === 'small') {
                book.classList.add('book_fs-small');
            } else if (control.dataset.size === 'big') {
                book.classList.add('book_fs-big');
            }
            // Если размер шрифта не задан (обычный), то класс book остается без изменений
        });
    });
});