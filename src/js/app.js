import Field from './Board';

const cells = Array.from(document.querySelectorAll('.cell'));

const field = new Field(cells);

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    field.deleteActiveClass();
    field.addActiveClass();
  }, 1000);
});
