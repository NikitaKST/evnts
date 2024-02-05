export default class Field {
  constructor(cells) {
    this.cells = cells;
    this.random = null;
  }

  setsRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (this.cells.length - 1));
    while (randomNumber === this.random) {
      randomNumber = Math.floor(Math.random() * (this.cells.length - 1));
    }
    this.random = randomNumber;
    return randomNumber;
  }

  deleteActiveClass() {
    const item = this.cells.find((el) => el.classList.contains('cell_active'));
    if (item) item.classList.remove('cell_active');
  }

  addActiveClass() {
    const item = this.cells[this.setsRandomNumber()];
    item.classList.add('cell_active');
  }
}
