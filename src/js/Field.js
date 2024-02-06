import GameStatistics from './GameStatistics.js';

export default class GameField {
  constructor(fields) {
    this.fields = fields;
    this.randomField = null;
    this.isHit = false;
    this.interval = null;
    this.gameState = new GameStatistics();
    this.firstMove = true;
    
    this.onClick = this.onClick.bind(this);
    
    this.fields.forEach((field) => {
      field.addEventListener('click', this.onClick);
    });
    }
  
    setRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (this.fields.length - 1));
    while (randomNumber === this.randomField) {
    randomNumber = Math.floor(Math.random() * (this.fields.length - 1));
    }
  
    this.randomField = randomNumber;
    return randomNumber;
}

removeActiveClass() {
  const activeField = this.fields.filter((field) => field.classList.contains('game-field-active'))[0];
  if (activeField) activeField.classList.remove('game-field-active');
}

addActiveClass() {
  const field = this.fields[this.setRandomNumber()];
  field.classList.add('game-field-active');
}

moveGoblin() {
  this.interval = setInterval(() => {
    if (!this.isHit) {
    if (!this.firstMove) {
    this.miss();
    } else {
    this.firstMove = false;
    }
    }
    if (this.isHit) {
    this.isHit = false;
    }
    this.removeActiveClass();
    this.addActiveClass();
  }, 1000);
}

clearInterval() {
  this.isHit = true;
  clearInterval(this.interval);
}

showScore() {
  document.querySelector('.score-number').textContent = this.gameState.score;
}

showMiss() {
  if (this.gameState.miss === 5) {
  this.gameOver();
  }
  document.querySelector('.miss-number').textContent = this.gameState.miss;
}

onClick(e) {
  if (e.target.className === 'game-field game-field-active') {
  this.gameState.score += 1;
  this.showScore();
  this.clearInterval();
  this.removeActiveClass();
  this.moveGoblin();
  }
}

  miss() {
    this.gameState.miss += 1;
    this.showMiss();
  }

  gameOver() {
    this.clearInterval();
    alert('Вы проиграли');
  }
}