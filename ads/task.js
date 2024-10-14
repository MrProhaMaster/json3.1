document.addEventListener("DOMContentLoaded", () => {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(rotator => {
    let cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;

    const changeCase = () => {
      // Найти текущий активный элемент и снять с него класс active
      cases[activeIndex].classList.remove('rotator__case_active');

      // Вычислить следующий индекс
      activeIndex = (activeIndex + 1) % cases.length;

      // Найти следующий элемент, добавить к нему класс active и установить цвет
      const nextCase = cases[activeIndex];
      const speed = nextCase.dataset.speed || 1000;
      const color = nextCase.dataset.color || 'black';

      nextCase.style.color = color;
      nextCase.classList.add('rotator__case_active');

      // Запланировать следующий перезапуск функции changeCase
      setTimeout(changeCase, speed);
    };

    // Начальный запуск смены
    setTimeout(changeCase, cases[activeIndex].dataset.speed || 1000);
  });
});