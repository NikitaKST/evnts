// Файл test.js

import Field from '../Board'; // Подставьте правильный путь к вашему файлу Board.js

test('Метод setsRandomNumber возвращает число в пределах длины массива', () => {
  const cells = [1, 2, 3, 4, 5];
  const field = new Field(cells);
  const randomNumber = field.setsRandomNumber();

  expect(randomNumber).toBeGreaterThanOrEqual(0);
  expect(randomNumber).toBeLessThan(cells.length);
});

test('Метод deleteActiveClass удаляет класс cell_active', () => {
  const cells = [{ classList: { contains: jest.fn(), remove: jest.fn() } }];
  cells[0].classList.contains.mockReturnValue(true);

  const field = new Field(cells);
  field.deleteActiveClass();

  expect(cells[0].classList.contains).toHaveBeenCalledWith('cell_active');
  expect(cells[0].classList.remove).toHaveBeenCalledWith('cell_active');
});

test('Метод addActiveClass добавляет класс cell_active', () => {
  const cells = [{ classList: { add: jest.fn() } }];

  const field = new Field(cells);
  field.setsRandomNumber = jest.fn().mockReturnValue(0);
  field.addActiveClass();

  expect(cells[0].classList.add).toHaveBeenCalledWith('cell_active');
});
